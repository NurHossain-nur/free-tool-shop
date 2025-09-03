// pages/Editor.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { FaDownload, FaUpload, FaRotateRight } from "react-icons/fa6";
import WebFont from "webfontloader";
import { FaTrash } from "react-icons/fa";

const WatermarkEditor = () => {
  const [image, setImage] = useState(null);
  const [watermarkText, setWatermarkText] = useState("FreeToolShop");
  const [watermarkImage, setWatermarkImage] = useState(null);
  const [opacity, setOpacity] = useState(0.6);
  const [fontSize, setFontSize] = useState(24);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState("center");
  const canvasRef = useRef(null);

  const [color, setColor] = useState("#B4ECC3");
  // New states
  const [fontWeight, setFontWeight] = useState("normal");
  const [outline, setOutline] = useState(false);
  const [outlineColor, setOutlineColor] = useState("#25A8D6");
  const [outlineWidth, setOutlineWidth] = useState(2);
  const [fontFamily, setFontFamily] = useState("Arial");
  const googleFonts = [
    "Roboto",
    "Poppins",
    "Montserrat",
    "Lato",
    "Open Sans",
    "Oswald",
    "Raleway",
    "Merriweather",
    "Nunito",
    "Ubuntu",
  ];

  const [repeatWatermark, setRepeatWatermark] = useState(false);
  const [horizontalGap, setHorizontalGap] = useState(100);
  const [verticalGap, setVerticalGap] = useState(100);
  const [diagonalMode, setDiagonalMode] = useState(false);
  const [logoScale, setLogoScale] = useState(0.2); // 20% default
  const [customLogoPosition, setCustomLogoPosition] = useState(false);
  const [logoXOffset, setLogoXOffset] = useState(50); // in %
  const [logoYOffset, setLogoYOffset] = useState(50); // in %
  const [showTextSettings, setShowTextSettings] = useState(true);
const [showWatermarkOptions, setShowWatermarkOptions] = useState(true);

  // Upload main image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed!");
      return;
    }
    setImage(URL.createObjectURL(file));
  };

  // Upload watermark logo
  const handleWatermarkUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed!");
      return;
    }
    setWatermarkImage(URL.createObjectURL(file));
  };

  const resetSettings = () => {
    setWatermarkText("FreeToolShop");
    setWatermarkImage(null);
    setOpacity(0.6);
    setFontSize(24);
    setRotation(0);
    setPosition("center");
    setColor("#B4ECC3");
    setFontWeight("normal");
    setOutline(false);
    setOutlineColor("#25A8D6");
    setOutlineWidth(2);
    setFontFamily("Arial");
    setRepeatWatermark(false);
    setHorizontalGap(100);
    setVerticalGap(100);
    setDiagonalMode(false);
  };

  // Calculate position
  const getPosition = (canvas, ctx, text, wmWidth = 0, wmHeight = 0) => {
    const padding = 20;
    const textWidth = wmWidth || ctx.measureText(text).width;
    const textHeight = wmHeight || fontSize;

    let x = 0,
      y = 0;

    switch (position) {
      case "top-left":
        x = padding;
        y = padding + textHeight;
        break;
      case "top-center":
        x = (canvas.width - textWidth) / 2;
        y = padding + textHeight;
        break;
      case "top-right":
        x = canvas.width - textWidth - padding;
        y = padding + textHeight;
        break;
      case "middle-left":
        x = padding;
        y = canvas.height / 2;
        break;
      case "center":
        x = (canvas.width - textWidth) / 2;
        y = canvas.height / 2;
        break;
      case "middle-right":
        x = canvas.width - textWidth - padding;
        y = canvas.height / 2;
        break;
      case "bottom-left":
        x = padding;
        y = canvas.height - padding;
        break;
      case "bottom-center":
        x = (canvas.width - textWidth) / 2;
        y = canvas.height - padding;
        break;
      case "bottom-right":
      default:
        x = canvas.width - textWidth - padding;
        y = canvas.height - padding;
        break;
    }

    return { x, y };
  };
  // Auto draw watermark when dependencies change
  useEffect(() => {
    if (!image || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const baseImage = new Image();
    baseImage.crossOrigin = "anonymous";
    baseImage.src = image;

    baseImage.onload = () => {
      canvas.width = baseImage.width;
      canvas.height = baseImage.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImage, 0, 0);
      ctx.globalAlpha = opacity;

      // Draw text watermark
      if (watermarkText && !watermarkImage) {
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        ctx.fillStyle = color;

        if (repeatWatermark) {
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.translate(-canvas.width / 2, -canvas.height / 2);

          const textWidth = ctx.measureText(watermarkText).width;

          const totalWidth = canvas.width + horizontalGap;
          const totalHeight = canvas.height + verticalGap;

          if (diagonalMode) {
            for (
              let y = -canvas.height;
              y < totalHeight * 2;
              y += verticalGap + fontSize
            ) {
              for (
                let x = -canvas.width;
                x < totalWidth * 2;
                x += horizontalGap + textWidth
              ) {
                const offset =
                  (y / (verticalGap + fontSize)) * (horizontalGap / 2); // diagonal offset
                const finalX = x + offset;
                const finalY = y;

                ctx.fillText(watermarkText, finalX, finalY);
                if (outline) {
                  ctx.lineWidth = outlineWidth;
                  ctx.strokeStyle = outlineColor;
                  ctx.strokeText(watermarkText, finalX, finalY);
                }
              }
            }
          } else {
            for (let y = 0; y < totalHeight; y += verticalGap + fontSize) {
              for (let x = 0; x < totalWidth; x += horizontalGap + textWidth) {
                ctx.fillText(watermarkText, x, y);
                if (outline) {
                  ctx.lineWidth = outlineWidth;
                  ctx.strokeStyle = outlineColor;
                  ctx.strokeText(watermarkText, x, y);
                }
              }
            }
          }

          ctx.restore();
        } else {
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate((rotation * Math.PI) / 180);
          const { x, y } = getPosition(canvas, ctx, watermarkText);
          ctx.fillText(
            watermarkText,
            x - canvas.width / 2,
            y - canvas.height / 2
          );
          if (outline) {
            ctx.lineWidth = outlineWidth;
            ctx.strokeStyle = outlineColor;
            ctx.strokeText(
              watermarkText,
              x - canvas.width / 2,
              y - canvas.height / 2
            );
          }
          ctx.restore();
        }
      }

      // Draw image watermark
      if (watermarkImage && !customLogoPosition) {
        const wm = new Image();
        wm.crossOrigin = "anonymous";
        wm.src = watermarkImage;
        wm.onload = () => {
          const wmWidth = canvas.width * logoScale;
          const wmHeight = (wm.height / wm.width) * wmWidth;
          let x, y;

          if (customLogoPosition) {
            x = (canvas.width - wmWidth) * (logoXOffset / 100);
            y = (canvas.height - wmHeight) * (logoYOffset / 100);
          } else {
            const pos = getPosition(
              canvas,
              ctx,
              watermarkText,
              wmWidth,
              wmHeight
            );
            x = pos.x;
            y = pos.y;
          }
          ctx.save();
          ctx.translate(x + wmWidth / 2, y + wmHeight / 2);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.drawImage(wm, -wmWidth / 2, -wmHeight / 2, wmWidth, wmHeight);
          ctx.restore();
        };
      }
    };
  }, [
    image,
    watermarkText,
    watermarkImage,
    opacity,
    fontSize,
    rotation,
    position,
    color,
    fontWeight,
    outline,
    outlineColor,
    outlineWidth,
    fontFamily,
    repeatWatermark,
    horizontalGap,
    verticalGap,
    diagonalMode,
    logoScale,
    logoXOffset,
    logoYOffset,
  ]);

  // Manual apply button (optional)
  const drawCanvas = () => {
    if (!canvasRef.current || !image) return;

    if (customLogoPosition) {
      setCustomLogoPosition(false);

      // Timeout allows state update to trigger re-render first
      setTimeout(() => {
        setCustomLogoPosition(true);
      }, 100);
    } else {
      // force re-render if not using drag
      setImage((prev) => prev + "");
    }
  };

  // Download watermarked image
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "watermarked.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast.success("Image downloaded!");
  };

  const dragDataRef = useRef(null);

  const handleDragStart = (e) => {
    const logo = e.target;
    const container = logo.parentElement;

    const startX = e.clientX;
    const startY = e.clientY;

    const rect = logo.getBoundingClientRect();
    const offsetLeft = rect.left - container.getBoundingClientRect().left;
    const offsetTop = rect.top - container.getBoundingClientRect().top;

    dragDataRef.current = {
      startX,
      startY,
      offsetLeft,
      offsetTop,
      container,
      logo,
    };

    document.addEventListener("mousemove", handleDragging);
    document.addEventListener("mouseup", handleDragEnd);
  };

  const handleDragging = (e) => {
    if (!dragDataRef.current) return;

    const { startX, startY, offsetLeft, offsetTop, container } =
      dragDataRef.current;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    const newLeft = offsetLeft + dx;
    const newTop = offsetTop + dy;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const xPercent = (newLeft / containerWidth) * 100;
    const yPercent = (newTop / containerHeight) * 100;

    // Clamp values between 0 and 100
    setLogoXOffset(Math.max(0, Math.min(100, xPercent)));
    setLogoYOffset(Math.max(0, Math.min(100, yPercent)));
  };

  const handleDragEnd = () => {
    dragDataRef.current = null;
    document.removeEventListener("mousemove", handleDragging);
    document.removeEventListener("mouseup", handleDragEnd);
  };

  useEffect(() => {
    if (fontFamily && googleFonts.includes(fontFamily)) {
      WebFont.load({
        google: {
          families: [fontFamily],
        },
      });
    }
  }, [fontFamily]);

  useEffect(() => {
    if (!customLogoPosition) {
      setLogoXOffset(50);
      setLogoYOffset(50);
    }
  }, [customLogoPosition]);

  return (
    <div className="max-w-6xl bg-neutral p-4 rounded-md  mx-auto text-text flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Watermark Editor</h2>

      {/* Upload Section */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <label className="btn btn-outline cursor-pointer">
          <FaUpload /> Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </label>
        <label className="btn btn-outline cursor-pointer">
          <FaUpload /> Upload Watermark Logo
          <input
            type="file"
            accept="image/*"
            onChange={handleWatermarkUpload}
            hidden
          />
        </label>

        {/* 👇 New "Remove Logo" Button */}
        {watermarkImage && (
          <button
            className="btn btn-error"
            onClick={() => setWatermarkImage(null)}
          >
            <FaTrash /> Remove Logo
          </button>
        )}
      </div>

      {/* Controls */}

      <div className="flex flex-col-reverse lg:flex-row w-full gap-6 items-start">
        {/* Left Side - Controls */}
        <div className="flex flex-col gap-4 w-full lg:w-[40%] max-w-[450px]">
            

          <div className="card bg-base-200 shadow-xl rounded-2xl p-5 space-y-4">
            <h3 className="card-title text-lg font-bold border-b pb-2">
              📝 Text Settings
            </h3>

            {/* Watermark Text */}
            <label className="form-control">
              <span className="label-text">Watermark Text</span>
              <input
                type="text"
                className="input input-bordered w-full"
                value={watermarkText}
                onChange={(e) => setWatermarkText(e.target.value)}
              />
            </label>

            {/* Font Family */}
            <label className="form-control">
              <span className="label-text">Font Family</span>
              <select
                className="select select-bordered w-full"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                {googleFonts.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </label>

            {/* Font Size */}
            <div>
              <label className="flex justify-between items-center mb-1">
                <span className="label-text">Font Size</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="12"
                    max="400"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="input input-bordered w-20 text-center"
                  />
                  <span className="font-mono text-sm">px</span>
                </div>
              </label>
              <input
                type="range"
                min="12"
                max="400"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="range range-xs"
              />
            </div>

            {/* Text Color */}
            <div>
              <span className="label-text">Text Color</span>
              <div className="flex items-center justify-between gap-2 mt-1">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-10 h-8 border rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => {
                    const hex = e.target.value;
                    if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
                      setColor(hex);
                    }
                  }}
                  className="input input-bordered w-24 font-mono"
                  maxLength={7}
                />
              </div>
            </div>

            {/* Font Weight */}
            <label className="form-control">
              <span className="label-text">Font Weight</span>
              <select
                className="select select-bordered w-full"
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="lighter">Thin</option>
              </select>
            </label>

            {/* Outline Toggle */}
            <label className="label cursor-pointer flex items-center justify-between">
              <span className="label-text">Enable Outline</span>
              <input
                type="checkbox"
                checked={outline}
                onChange={(e) => setOutline(e.target.checked)}
                className="checkbox checkbox-primary"
              />
            </label>

            {outline && (
              <div className="bg-base-300 p-3 rounded-lg space-y-3">
                {/* Outline Color */}
                <div>
                  <span className="label-text">Outline Color</span>
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <input
                      type="color"
                      value={outlineColor}
                      onChange={(e) => setOutlineColor(e.target.value)}
                      className="w-10 h-8 border rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={outlineColor}
                      onChange={(e) => {
                        const hex = e.target.value;
                        if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
                          setOutlineColor(hex);
                        }
                      }}
                      className="input input-bordered w-24 font-mono"
                      maxLength={7}
                    />
                  </div>
                </div>

                {/* Outline Width */}
                <div>
                  <label className="flex justify-between items-center mb-1">
                    <span className="label-text">Outline Width</span>
                    <span className="font-mono">{outlineWidth}px</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={outlineWidth}
                    onChange={(e) => setOutlineWidth(Number(e.target.value))}
                    className="range range-xs"
                  />
                </div>
              </div>
            )}

            {/* Repeat Watermark */}
            <label className="label cursor-pointer flex items-center justify-between">
              <span className="label-text">Repeat Watermark</span>
              <input
                type="checkbox"
                checked={repeatWatermark}
                onChange={(e) => setRepeatWatermark(e.target.checked)}
                className="checkbox checkbox-primary"
              />
            </label>

            {repeatWatermark && (
              <>
                {/* Diagonal */}
                <label className="label cursor-pointer flex items-center justify-between">
                  <span className="label-text">Diagonal Tiling</span>
                  <input
                    type="checkbox"
                    checked={diagonalMode}
                    onChange={(e) => setDiagonalMode(e.target.checked)}
                    className="checkbox checkbox-primary"
                  />
                </label>

                {/* Horizontal Gap */}
                <div>
                  <label className="flex justify-between items-center mb-1">
                    <span className="label-text">Horizontal Gap</span>
                    <span className="font-mono">{horizontalGap}px</span>
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={horizontalGap}
                    onChange={(e) => setHorizontalGap(Number(e.target.value))}
                    className="range range-xs"
                  />
                </div>

                {/* Vertical Gap */}
                <div>
                  <label className="flex justify-between items-center mb-1">
                    <span className="label-text">Vertical Gap</span>
                    <span className="font-mono">{verticalGap}px</span>
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={verticalGap}
                    onChange={(e) => setVerticalGap(Number(e.target.value))}
                    className="range range-xs"
                  />
                </div>
              </>
            )}
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold mb-3 border-b pb-2">
              Watermark Options
            </h3>

            {watermarkImage && (
              <div className="mt-2">
                <label className="block font-semibold mb-1">Logo Size</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0.05"
                    max="1"
                    step="0.05"
                    value={logoScale}
                    onChange={(e) => setLogoScale(Number(e.target.value))}
                    className="range range-sm flex-grow"
                  />
                  <span className="font-mono text-xs bg-base-200 px-2 py-1 rounded">
                    {(logoScale * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            )}

            {watermarkImage && (
              <div className="mt-2 space-y-3">
                {/* Toggle */}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={customLogoPosition}
                    onChange={(e) => setCustomLogoPosition(e.target.checked)}
                  />
                  <span className="text-sm">Custom Logo Position</span>
                </label>

                {/* X Slider */}
                {customLogoPosition && (
                  <div>
                    <label className="flex justify-between mb-1 text-sm">
                      <span>X Position</span>
                      <span className="font-mono">
                        {logoXOffset.toFixed(0)}%
                      </span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={logoXOffset}
                      onChange={(e) => setLogoXOffset(Number(e.target.value))}
                      className="range range-xs"
                    />
                  </div>
                )}

                {/* Y Slider */}
                {customLogoPosition && (
                  <div>
                    <label className="flex justify-between mb-1 text-sm">
                      <span>Y Position</span>
                      <span className="font-mono">
                        {logoYOffset.toFixed(0)}%
                      </span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={logoYOffset}
                      onChange={(e) => setLogoYOffset(Number(e.target.value))}
                      className="range range-xs"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Opacity Control */}
            <div className="mt-2">
              <label className="flex justify-between items-center font-semibold text-sm mb-1">
                <span>Opacity</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0.1"
                    max="1"
                    step="0.1"
                    value={opacity}
                    onChange={(e) => setOpacity(Number(e.target.value))}
                    className="input input-bordered w-20 text-center input-sm"
                  />
                  <span className="font-mono text-xs text-gray-500">
                    ({Math.round(opacity * 100)}%)
                  </span>
                </div>
              </label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="range range-sm"
              />
            </div>

            {/* Rotation Control */}
            <div className="mt-4">
              <label className="block font-semibold text-sm mb-2">
                Rotation
              </label>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <button
                  className="btn btn-xs btn-outline"
                  onClick={() => setRotation((prev) => (prev - 15 + 360) % 360)}
                >
                  -15°
                </button>
                <button
                  className="btn btn-xs btn-outline"
                  onClick={() => setRotation(0)}
                >
                  Reset
                </button>
                <button
                  className="btn btn-xs btn-outline"
                  onClick={() => setRotation((prev) => (prev + 15) % 360)}
                >
                  +15°
                </button>
                <div className="flex items-center gap-2 ml-auto">
                  <input
                    type="number"
                    min="0"
                    max="360"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                    className="input input-bordered w-20 text-center input-sm"
                  />
                  <span className="font-mono">°</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="range range-sm"
              />
            </div>

            {/* Position buttons */}
            {!watermarkImage && (
              <>
                <label className="block mt-4 font-semibold text-sm">
                  Position
                </label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {[
                    { label: "Top Left", value: "top-left" },
                    { label: "Top Center", value: "top-center" },
                    { label: "Top Right", value: "top-right" },
                    { label: "Middle Left", value: "middle-left" },
                    { label: "Center", value: "center" },
                    { label: "Middle Right", value: "middle-right" },
                    { label: "Bottom Left", value: "bottom-left" },
                    { label: "Bottom Center", value: "bottom-center" },
                    { label: "Bottom Right", value: "bottom-right" },
                  ].map((pos) => (
                    <button
                      key={pos.value}
                      className={`btn btn-xs ${
                        position === pos.value ? "btn-primary" : "btn-outline"
                      }`}
                      onClick={() => setPosition(pos.value)}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {image && (
              <button
                className="btn btn-warning w-full mt-4"
                onClick={resetSettings}
              >
                Reset All Settings
              </button>
            )}
          </div>
        </div>

        {/* Right Side - Preview */}
        {image && (
          <div className="flex flex-col items-center w-full lg:flex-1">
            <div className="relative">
              <canvas
                ref={canvasRef}
                className="border rounded shadow max-w-full"
              />

              {customLogoPosition && watermarkImage && (
                <image
                  src={watermarkImage}
                  alt="Watermark Preview"
                  className="absolute cursor-move pointer-events-auto select-none"
                  style={{
                    left: `${logoXOffset}%`,
                    top: `${logoYOffset}%`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                    width: `${logoScale * 100}%`,
                    opacity: opacity,
                    zIndex: 10,
                  }}
                  draggable={false}
                  onMouseDown={handleDragStart}
                />
              )}
            </div>

            {/* <button className="btn btn-secondary mt-2" onClick={drawCanvas}>
              <FaRotateRight /> Apply Watermark
            </button> */}

            <button className="btn btn-primary mt-4" onClick={handleDownload}>
              <FaDownload /> Download Image
            </button>
          </div>
        )}
      </div>

      {/* Download Button */}
      {/* {image && (
        <button className="btn btn-primary mt-6" onClick={handleDownload}>
          <FaDownload /> Download Image
        </button>
      )} */}
    </div>
  );
};

export default WatermarkEditor;
