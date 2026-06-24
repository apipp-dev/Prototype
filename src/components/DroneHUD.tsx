import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sliders, 
  Video, 
  Camera, 
  Battery, 
  Compass, 
  Navigation, 
  Wifi, 
  Tv, 
  Activity, 
  Maximize2, 
  Play, 
  Pause,
  MapPin,
  RefreshCw,
  Gauge
} from 'lucide-react';

interface SimulatedLocation {
  id: string;
  name: string;
  desc: string;
  coords: string;
  lat: number;
  lng: number;
  videoUrl: string;
}

export default function DroneHUD() {
  // State variables for simulation parameters
  const [resolution, setResolution] = useState('1280 : 720');
  const [isRecording, setIsRecording] = useState(true);
  const [recTime, setRecTime] = useState(129); // 02:09 initial seconds (2 min 9 sec)
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const [shutterSpeed, setShutterSpeed] = useState('180.0');
  const [iso, setIso] = useState('600');
  const [lens, setLens] = useState('25 mm');
  const [cameraMode, setCameraMode] = useState<'video' | 'photo'>('video');
  const [altitude, setAltitude] = useState(80); // meters
  const [speed, setSpeed] = useState(20); // km/h
  const [yaw, setYaw] = useState(83); // compass degrees
  const [pitch, setPitch] = useState(0); // tilt degrees
  const [roll, setRoll] = useState(0); // roll degrees
  const [batteryPercent, setBatteryPercent] = useState(75);
  const [selectedFilter, setSelectedFilter] = useState<'none' | 'R' | 'G' | 'B' | 'Y'>('none');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [altitudeLimit, setAltitudeLimit] = useState(270);
  const [exposureVal, setExposureVal] = useState(8.3);
  const [triggerFlash, setTriggerFlash] = useState(false);
  const [shutterClickFeedback, setShutterClickFeedback] = useState(false);
  const [histogramData, setHistogramData] = useState<number[]>([12, 18, 25, 45, 60, 52, 48, 30, 15, 8, 12, 28, 42, 50, 41, 22, 10, 5]);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Simulated flight coordinates in Banda Aceh, Aceh Besar, Sabang
  const flightLocations: SimulatedLocation[] = [
    {
      id: 'lhoknga',
      name: 'ACEH BESAR CLIFFSIDE',
      desc: 'Cinematic FPV reef tracing & high-wind ridge tracking over Lhoknga beach peaks.',
      coords: '5°28\'14" N, 95°14\'32" E',
      lat: 5.4705,
      lng: 95.2422,
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-and-mountains-in-winter-3559-large.mp4',
    },
    {
      id: 'sabang',
      name: 'PULAU WEH DEEP OCEAN',
      desc: 'High-speed marine tracking, overwater low-altitude passes, and coral reef survey.',
      coords: '5°52\'10" N, 95°19\'55" E',
      lat: 5.8694,
      lng: 95.3319,
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-with-glow-in-the-dark-glass-41716-large.mp4', // beautiful neon glow representation
    },
    {
      id: 'masjid',
      name: 'BANDA ACEH METROPOLIS',
      desc: 'Low-speed aerial panorama, architectural symmetry capture, and urban grid documentation.',
      coords: '5°33\'14" N, 95°19\'02" E',
      lat: 5.5539,
      lng: 95.3172,
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-supercar-driving-through-the-city-at-night-42289-large.mp4', // ultra high definition city stream
    }
  ];

  // Discharging battery simulation
  useEffect(() => {
    const batteryTimer = setInterval(() => {
      setBatteryPercent((prev) => (prev > 1 ? prev - 1 : 100));
    }, 45000);

    return () => clearInterval(batteryTimer);
  }, []);

  // Live Recording time simulation
  useEffect(() => {
    let recTimer: NodeJS.Timeout;
    if (isRecording) {
      recTimer = setInterval(() => {
        setRecTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(recTimer);
  }, [isRecording]);

  // Histogram simulation noise
  useEffect(() => {
    const histogramTimer = setInterval(() => {
      setHistogramData((prev) => 
        prev.map((val) => {
          const change = Math.floor(Math.random() * 9) - 4;
          return Math.max(2, Math.min(65, val + change));
        })
      );
    }, 300);

    return () => clearInterval(histogramTimer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const activeLoc = flightLocations[activeLocationIndex];

  // Joystick actions
  const handleJoystickPress = (direction: 'up' | 'down' | 'left' | 'right' | 'center') => {
    switch(direction) {
      case 'up':
        setAltitude((prev) => Math.min(prev + 15, altitudeLimit));
        setSpeed((prev) => Math.min(prev + 4, 85));
        setPitch((prev) => Math.min(prev + 5, 25));
        break;
      case 'down':
        setAltitude((prev) => Math.max(prev - 10, 5));
        setSpeed((prev) => Math.max(prev - 3, 0));
        setPitch((prev) => Math.max(prev - 5, -25));
        break;
      case 'left':
        setYaw((prev) => (prev - 15 + 360) % 360);
        setRoll((prev) => Math.max(prev - 4, -15));
        break;
      case 'right':
        setYaw((prev) => (prev + 15) % 360);
        setRoll((prev) => Math.min(prev + 4, 15));
        break;
      case 'center':
        // Reset tilt states
        setPitch(0);
        setRoll(0);
        setSpeed(20);
        break;
    }

    // Ease back tilt/roll after some time
    if (direction !== 'center') {
      setTimeout(() => {
        setPitch((prev) => prev * 0.5);
        setRoll((prev) => prev * 0.5);
      }, 800);
    }
  };

  const triggerShutter = () => {
    setShutterClickFeedback(true);
    setTriggerFlash(true);
    setTimeout(() => {
      setTriggerFlash(false);
    }, 150);
    setTimeout(() => {
      setShutterClickFeedback(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 py-8 select-none" id="drone-hud-dashboard">
      
      {/* Title Header with neon details */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 border-b border-white/5 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase">
              // TELEMETRY LIVE COMMAND CENTER
            </span>
          </div>
          <h1 className="font-display font-[900] text-2xl sm:text-3xl text-white tracking-wider mt-1">
            SANTT CINEMATIC DRONE SIMULATOR
          </h1>
          <p className="text-xs text-neutral-400 font-sans tracking-wide mt-1">
            Experience the actual high-framerate heads-up controller environment used for our aerial assignments across Aceh.
          </p>
        </div>
        
        {/* Connection status badges */}
        <div className="flex items-center gap-3 mt-4 md:mt-0 font-mono text-[10px]">
          <div className="px-3 py-1.5 rounded-md bg-[#0D0D0D] border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.05)]">
            <Wifi className="w-3.5 h-3.5 animate-pulse" />
            <span>LINK-STATE: OPTIMAL</span>
          </div>
          <div className="px-3 py-1.5 rounded-md bg-[#0D0D0D] border border-white/5 text-neutral-400 flex items-center gap-1.5">
            <Tv className="w-3.5 h-3.5" />
            <span>4K FEED</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Match the design ratio perfectly */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column (Main Live Video Feed) - Span 9 of 12 */}
        <div className="lg:col-span-9 flex flex-col gap-5">
          
          {/* Main Simulated Monitor Panel */}
          <div className="relative aspect-[16/10] w-full bg-black rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
            
            {/* Embedded Live Video */}
            <video
              ref={videoRef}
              key={activeLoc.id}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none"
              style={{
                filter: `
                  scale(${zoomLevel}) 
                  brightness(${1 + (exposureVal - 8.3) * 0.1}) 
                  ${selectedFilter === 'R' ? 'hue-rotate(-45deg) saturate(1.8)' : ''}
                  ${selectedFilter === 'G' ? 'hue-rotate(90deg) saturate(1.5)' : ''}
                  ${selectedFilter === 'B' ? 'hue-rotate(200deg) saturate(1.8)' : ''}
                  ${selectedFilter === 'Y' ? 'sepia(0.6) saturate(1.8) hue-rotate(20deg)' : ''}
                `,
                transform: `rotate(${roll}deg) translateY(${pitch * 0.5}px)`
              }}
            >
              <source src={activeLoc.videoUrl} type="video/mp4" />
            </video>

            {/* Flash Overlay for Photo Capture */}
            <AnimatePresence>
              {triggerFlash && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 bg-white z-40 pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* Shutter Click Indicator */}
            {shutterClickFeedback && (
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-black/10">
                <div className="px-6 py-4 bg-[#0A0A0A]/95 border border-emerald-500/30 rounded-xl flex items-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-bounce">
                  <Camera className="w-5 h-5 text-emerald-400 animate-spin" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">CAPTURED RAW_IMAGE_00{activeLocationIndex + 1}.DNG</span>
                </div>
              </div>
            )}

            {/* Ambient Dark Gradient Vignette Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

            {/* Crosshair Target Reticle overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              
              {/* Central Circle with Artificial Horizon tilt */}
              <div 
                className="relative w-44 h-44 flex items-center justify-center transition-transform duration-300 ease-out"
                style={{ transform: `rotate(${-roll}deg) translateY(${pitch}px)` }}
              >
                {/* Horizontal line */}
                <div className="absolute left-0 right-0 h-[1.5px] bg-white/45">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white/80 flex items-center justify-center bg-transparent">
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                </div>

                {/* Vertical markers */}
                <div className="absolute top-0 bottom-0 w-[1px] h-12 bg-white/20 self-center" />
                <div className="absolute top-0 bottom-0 w-[1px] h-12 bg-white/20 self-center rotate-90" />
                
                {/* Angle scale markings */}
                <span className="absolute -left-6 font-mono text-[8px] text-white/50">-10°</span>
                <span className="absolute -right-6 font-mono text-[8px] text-white/50">+10°</span>
                
                {/* Moving roll indicator */}
                <div 
                  className="absolute top-2 w-5 h-2 border-t border-white/70"
                  style={{ transform: `translateX(${roll * 2}px)` }}
                />
              </div>

              {/* Dynamic Tracking box target */}
              <div className="absolute top-1/3 left-1/2 -translate-x-12 w-20 h-20 border border-amber-400/50 rounded-sm">
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-amber-400" />
                <span className="absolute top-1 left-2 font-mono text-[7px] text-amber-400 font-bold tracking-widest uppercase">TRACKING LOCK // SAT_G7</span>
              </div>
            </div>

            {/* TOP HUD ROW BAR */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
              
              {/* HDR, Zoom & FPS badge */}
              <div className="flex items-center gap-3">
                <span className="px-1.5 py-0.5 rounded border border-white/20 bg-black/40 font-mono text-[9px] text-white tracking-widest font-bold">
                  HDR
                </span>
                <span className="font-mono text-[10px] text-white/90">
                  4K <span className="text-emerald-400 font-bold">// 19.67FPS</span>
                </span>
              </div>

              {/* CENTER CLOCK TIMER */}
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/60 border border-white/5 shadow-inner">
                {isRecording ? (
                  <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626] animate-pulse" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-neutral-600" />
                )}
                <span className="font-mono text-[11px] text-white font-bold tracking-widest">
                  {isRecording ? `REC ${formatTime(recTime)}` : 'PAUSED'}
                </span>
              </div>

              {/* RIGHT STATUS INDICATORS */}
              <div className="flex items-center gap-3">
                
                {/* Pause/Record controls */}
                <div className="flex items-center rounded bg-black/40 border border-white/15 overflow-hidden">
                  <button 
                    onClick={() => setIsRecording(true)}
                    className={`p-1.5 hover:bg-neutral-800 transition-colors ${isRecording ? 'text-emerald-400 bg-white/5' : 'text-neutral-400'}`}
                    title="Resume Recording"
                  >
                    <Play className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => setIsRecording(false)}
                    className={`p-1.5 hover:bg-neutral-800 transition-colors ${!isRecording ? 'text-red-500 bg-white/5' : 'text-neutral-400'}`}
                    title="Pause Recording"
                  >
                    <Pause className="w-3 h-3" />
                  </button>
                </div>

                {/* Battery percentage display */}
                <div className="flex items-center gap-1 bg-black/40 border border-white/10 px-2.5 py-1 rounded">
                  <Battery className={`w-3.5 h-3.5 ${batteryPercent < 20 ? 'text-red-500 animate-pulse' : 'text-emerald-400'}`} />
                  <span className={`font-mono text-[10px] font-bold ${batteryPercent < 20 ? 'text-red-400' : 'text-white'}`}>
                    {batteryPercent}%
                  </span>
                </div>
              </div>
            </div>

            {/* LEFT OVERLAY HUD COLUMN (Sliders & Histogram) */}
            <div className="absolute left-4 top-1/4 bottom-16 w-32 flex flex-col justify-between pointer-events-none z-10">
              
              {/* Zoom & Range Slider Level (Interactive container) */}
              <div className="pointer-events-auto bg-black/40 border border-white/5 backdrop-blur-sm p-2 rounded-lg flex flex-col gap-1 max-w-[80px]">
                <span className="font-mono text-[7px] text-white/50 uppercase tracking-widest">ZOOM</span>
                <div className="flex items-center justify-between text-white font-mono text-[9px] font-bold">
                  <button 
                    onClick={() => setZoomLevel((prev) => Math.max(1, prev - 0.5))}
                    className="hover:text-emerald-400 shrink-0 w-4 h-4 bg-black/40 border border-white/10 rounded flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span>{zoomLevel.toFixed(1)}x</span>
                  <button 
                    onClick={() => setZoomLevel((prev) => Math.min(3.5, prev + 0.5))}
                    className="hover:text-emerald-400 shrink-0 w-4 h-4 bg-black/40 border border-white/10 rounded flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* RGB Filter selection (Interactive) */}
              <div className="pointer-events-auto bg-black/60 border border-white/5 backdrop-blur-sm p-2.5 rounded-lg flex flex-col gap-1.5">
                <span className="font-mono text-[7px] text-white/50 uppercase tracking-widest">FILTERS</span>
                <div className="grid grid-cols-5 gap-1 font-mono text-[9px] font-black text-center">
                  {[
                    { id: 'none', label: 'OFF', color: 'text-neutral-400 border-neutral-700' },
                    { id: 'R', label: 'R', color: 'text-red-500 border-red-950 bg-red-950/20' },
                    { id: 'G', label: 'G', color: 'text-emerald-500 border-emerald-950 bg-emerald-950/20' },
                    { id: 'B', label: 'B', color: 'text-blue-500 border-blue-950 bg-blue-950/20' },
                    { id: 'Y', label: 'Y', color: 'text-amber-500 border-amber-950 bg-amber-950/20' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFilter(f.id as any)}
                      className={`py-1 border rounded hover:scale-105 transition-all text-[8px] cursor-pointer ${
                        selectedFilter === f.id 
                          ? 'border-emerald-400 text-white bg-emerald-500/35 font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]' 
                          : f.color
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Real-time Simulated Histogram Graphic */}
              <div className="bg-black/60 border border-white/5 backdrop-blur-sm p-2.5 rounded-lg">
                <span className="font-mono text-[7px] text-white/40 uppercase tracking-widest block mb-1">HISTOGRAM</span>
                <div className="flex items-end gap-[2px] h-11 w-full pt-1">
                  {histogramData.map((val, i) => (
                    <div 
                      key={i} 
                      className="bg-emerald-400/80 rounded-t-[1px] flex-grow transition-all duration-300"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between font-mono text-[6px] text-white/40 mt-1 uppercase">
                  <span>SHD</span>
                  <span>MID</span>
                  <span>HLT</span>
                </div>
              </div>
            </div>

            {/* CAMERA FEED WATERMARK / FLIGHT PATH DISPLAY */}
            <div className="absolute right-4 bottom-4 pointer-events-none text-right font-mono text-[8px] text-white/40 bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
              <span>SIM_STREAM_G7 // SECTOR_BA_{activeLoc.id.toUpperCase()}</span>
            </div>
          </div>

          {/* BOTTOM INTERACTIVE CONSOLE BLOCK */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 flex flex-col md:flex-row items-stretch gap-6 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            
            {/* Map Component Column (1 of 3) */}
            <div className="flex flex-col gap-2 min-w-[200px] flex-1">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  TACTICAL FLIGHT COORDINATOR
                </span>
                <span className="text-[8px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">GPS LOCK</span>
              </div>
              
              {/* Tactical Cyberspace Vector Map */}
              <div className="relative h-40 bg-black rounded-xl border border-white/5 overflow-hidden flex items-center justify-center p-3">
                {/* SVG Cyber Grid Background */}
                <svg className="absolute inset-0 w-full h-full text-emerald-500/5" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  
                  {/* Concentric rings */}
                  <circle cx="50%" cy="50%" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
                  <circle cx="50%" cy="50%" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  
                  {/* Map contours (simulated bays) */}
                  <path d="M 0,20 Q 35,45 80,40 T 150,70 T 220,50 L 250,110 L 0,110 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,2" />
                </svg>

                {/* Simulated Radar Line */}
                <div className="absolute inset-0 origin-center bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 rotate-sweep animate-[spin_4s_linear_infinite] pointer-events-none" />

                {/* Pinging Radar Coordinate Dot representing Selected Location */}
                <div 
                  className="absolute z-20 flex items-center justify-center transition-all duration-700"
                  style={{
                    left: `${45 + (activeLocationIndex === 0 ? -15 : activeLocationIndex === 1 ? 25 : 5)}%`,
                    top: `${50 + (activeLocationIndex === 0 ? 15 : activeLocationIndex === 1 ? -20 : 5)}%`
                  }}
                >
                  <span className="absolute w-5 h-5 rounded-full bg-emerald-400/20 border border-emerald-400/50 animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                </div>

                {/* Location PIN Tags - Interactive clickable nodes */}
                {flightLocations.map((loc, idx) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocationIndex(idx)}
                    className={`absolute z-30 flex items-center gap-1 px-2 py-1 rounded text-[8px] font-mono border transition-all cursor-pointer ${
                      activeLocationIndex === idx 
                        ? 'bg-emerald-500 text-neutral-950 font-bold border-emerald-400 scale-105 shadow-[0_0_10px_rgba(16,185,129,0.3)]' 
                        : 'bg-neutral-950/90 text-neutral-400 border-white/5 hover:border-emerald-500/40'
                    }`}
                    style={{
                      left: `${15 + idx * 28}%`,
                      bottom: `${12 + idx * 22}%`
                    }}
                  >
                    <MapPin className="w-2.5 h-2.5 shrink-0" />
                    <span>LOC-0{idx+1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter & Mode Grid Column (2 of 3) - Match design tables */}
            <div className="flex-[1.5] flex flex-col justify-between gap-4">
              
              {/* Top row: Video/Photo Toggles & Resolutions */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-1.5 p-0.5 rounded-lg bg-neutral-950 border border-white/5">
                  <button
                    onClick={() => setCameraMode('video')}
                    className={`px-3 py-1.5 rounded-md flex items-center gap-1 text-[9px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      cameraMode === 'video' 
                        ? 'bg-emerald-500 text-neutral-950 shadow-md' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video</span>
                  </button>
                  <button
                    onClick={() => setCameraMode('photo')}
                    className={`px-3 py-1.5 rounded-md flex items-center gap-1 text-[9px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      cameraMode === 'photo' 
                        ? 'bg-emerald-500 text-neutral-950 shadow-md' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Photo</span>
                  </button>
                </div>

                {/* Resolution selections */}
                <div className="flex items-center gap-1 font-mono text-[8px] font-bold">
                  {[
                    '1920 : 1080',
                    '1280 : 720',
                    '854 : 480',
                    '640 : 360'
                  ].map((res) => (
                    <button
                      key={res}
                      onClick={() => setResolution(res)}
                      className={`px-1.5 py-1 rounded border transition-colors cursor-pointer ${
                        resolution === res 
                          ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10' 
                          : 'border-white/5 text-neutral-500 hover:text-white'
                      }`}
                    >
                      {res}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data parameters Grid - Matches exact typography and keylines of HUD */}
              <div className="grid grid-cols-3 gap-y-4 gap-x-2 py-1">
                <div className="border-r border-white/5 pr-2">
                  <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-wider">SPEED</span>
                  <span className="font-display font-black text-sm text-white tracking-wider flex items-baseline gap-1 mt-0.5">
                    {speed} <span className="text-[9px] font-mono font-light text-neutral-400">km/h</span>
                  </span>
                </div>
                <div className="border-r border-white/5 px-2">
                  <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-wider">LENS</span>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="font-display font-black text-sm text-emerald-400 tracking-wider">
                      {lens}
                    </span>
                    <button 
                      onClick={() => setLens((prev) => prev === '16 mm' ? '25 mm' : prev === '25 mm' ? '50 mm' : '16 mm')}
                      className="text-neutral-500 hover:text-emerald-400 hover:scale-110 transition-all cursor-pointer"
                      title="Toggle Focal Length"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="pl-2">
                  <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-wider">FRAME RESOLUTION</span>
                  <span className="font-display font-black text-xs text-white tracking-wider block mt-1 uppercase text-neutral-300">
                    {resolution.replace(' : ', 'x')}
                  </span>
                </div>

                <div className="border-r border-white/5 pr-2 pt-2 border-t border-white/5">
                  <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-wider">HEIGHT</span>
                  <span className="font-display font-black text-sm text-white tracking-wider flex items-baseline gap-1 mt-0.5">
                    {altitude} <span className="text-[9px] font-mono font-light text-neutral-400">m</span>
                  </span>
                </div>
                <div className="border-r border-white/5 px-2 pt-2 border-t border-white/5">
                  <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-wider">ISO</span>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="font-display font-black text-sm text-white tracking-wider">
                      {iso}
                    </span>
                    <button 
                      onClick={() => setIso((prev) => prev === '100' ? '200' : prev === '200' ? '400' : prev === '400' ? '800' : prev === '800' ? '1600' : '100')}
                      className="text-neutral-500 hover:text-emerald-400 hover:scale-110 transition-all cursor-pointer"
                      title="Adjust ISO Sensitivity"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="pl-2 pt-2 border-t border-white/5">
                  <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-wider">FLIGHT NODE</span>
                  <span className="font-display font-black text-[10px] text-emerald-400 tracking-wider block mt-1 uppercase leading-none truncate max-w-[150px]">
                    {activeLoc.name}
                  </span>
                </div>

                <div className="border-r border-white/5 pr-2 pt-2 border-t border-white/5">
                  <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-wider">FLIGHT TIME</span>
                  <span className="font-display font-black text-sm text-white tracking-wider block mt-0.5 font-mono">
                    {formatTime(recTime)}
                  </span>
                </div>
                <div className="border-r border-white/5 px-2 pt-2 border-t border-white/5">
                  <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-wider">SHUTTER ANGLE</span>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="font-display font-black text-sm text-white tracking-wider">
                      {shutterSpeed}°
                    </span>
                    <button 
                      onClick={() => setShutterSpeed((prev) => prev === '90.0' ? '120.0' : prev === '120.0' ? '180.0' : prev === '180.0' ? '240.0' : prev === '240.0' ? '360.0' : '90.0')}
                      className="text-neutral-500 hover:text-emerald-400 hover:scale-110 transition-all cursor-pointer"
                      title="Adjust Shutter Interval"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="pl-2 pt-2 border-t border-white/5 flex items-end">
                  <button 
                    onClick={triggerShutter}
                    className="w-full py-1.5 bg-red-600 hover:bg-red-500 text-white font-mono text-[9px] font-bold uppercase rounded tracking-widest flex items-center justify-center gap-1 cursor-pointer transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                  >
                    <Gauge className="w-3.5 h-3.5" />
                    <span>{cameraMode === 'video' ? 'TRIGGER REC' : 'TAKE RAW'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* D-Pad Virtual Joystick Column (3 of 3) - Perfect circular gamepad from image */}
            <div className="flex-1 flex flex-col items-center justify-center min-w-[160px]">
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest mb-2 block text-center">FPV CAMERA GIMBAL STEER</span>
              <div className="relative w-28 h-28 rounded-full bg-neutral-950 border border-white/10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),_0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center">
                
                {/* Center menu button */}
                <button 
                  onClick={() => handleJoystickPress('center')}
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-emerald-500 hover:bg-neutral-850 text-neutral-400 hover:text-white transition-all flex flex-col items-center justify-center shadow-md z-10 cursor-pointer"
                  title="Reset Gimbal Calibrate"
                >
                  <span className="text-[7px] font-mono uppercase leading-none font-bold">RESET</span>
                  <span className="text-[6px] font-mono text-emerald-400 tracking-tighter uppercase leading-none">LOCK</span>
                </button>

                {/* Joystick Arrow Buttons */}
                {/* Up Button */}
                <button
                  onClick={() => handleJoystickPress('up')}
                  className="absolute top-1 left-1/2 -translate-x-1/2 p-1.5 text-neutral-500 hover:text-emerald-400 hover:scale-110 active:scale-95 cursor-pointer transition-all"
                  title="Altitude Up"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
                </button>
                {/* Down Button */}
                <button
                  onClick={() => handleJoystickPress('down')}
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 p-1.5 text-neutral-500 hover:text-emerald-400 hover:scale-110 active:scale-95 cursor-pointer transition-all"
                  title="Altitude Down"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>
                </button>
                {/* Left Button */}
                <button
                  onClick={() => handleJoystickPress('left')}
                  className="absolute left-1 top-1/2 -translate-y-1/2 p-1.5 text-neutral-500 hover:text-emerald-400 hover:scale-110 active:scale-95 cursor-pointer transition-all"
                  title="Pan Left"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
                </button>
                {/* Right Button */}
                <button
                  onClick={() => handleJoystickPress('right')}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-neutral-500 hover:text-emerald-400 hover:scale-110 active:scale-95 cursor-pointer transition-all"
                  title="Pan Right"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Drone telemetry metrics panel (Span 3 of 12) */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          
          {/* DJI Mavic Pro Branding Card */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display font-black text-lg text-white tracking-wider uppercase leading-none">DJI MAVIC PRO</h3>
                <span className="text-[8px] font-mono tracking-widest text-emerald-400 uppercase font-bold block mt-1">
                  FHD HIGH-FRAMERATE LIVE FEED
                </span>
              </div>
              <Compass className="w-6 h-6 text-emerald-400 animate-[spin_10s_linear_infinite]" />
            </div>

            {/* Custom Drone Line Drawing illustration */}
            <div className="relative h-20 w-full my-4 flex items-center justify-center border-t border-b border-white/5 py-2">
              <svg className="w-36 h-12 text-emerald-500/25" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,15 L90,15 M30,15 L50,5 L70,15 M20,15 L30,22 L70,22 L80,15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="80" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="5" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
                {/* Propeller blades */}
                <path d="M12,12 L28,18 M72,12 L88,18" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2,1" />
              </svg>
              <span className="absolute bottom-1 right-2 font-mono text-[7px] text-neutral-500 uppercase">SYS_NODE: ONLINE</span>
            </div>

            {/* Battery Status card */}
            <div className="bg-black/40 border border-white/5 p-3 rounded-xl flex items-center justify-between">
              <div>
                <span className="block font-mono text-[8px] text-neutral-500 uppercase">BATTERY CELL HEALTH</span>
                <span className="font-display font-black text-lg text-white mt-0.5 block">{batteryPercent}%</span>
                <span className="text-[7px] font-mono text-neutral-400">12 min flight capacity left</span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#0F0F0F] border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <Battery className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Altitude Limited Slider Controller */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <div>
              <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest font-bold">ALTITUDE LIMIT CAP</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-display font-black text-lg text-white tracking-tight">{altitudeLimit} m</span>
                <span className="text-[8px] font-mono text-amber-500 uppercase">MAX_SAFE_HEIGHT</span>
              </div>
            </div>

            {/* Range slider input */}
            <input 
              type="range" 
              min="100" 
              max="500" 
              step="50"
              value={altitudeLimit} 
              onChange={(e) => setAltitudeLimit(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-neutral-900 rounded-lg cursor-pointer" 
            />
            <div className="flex justify-between text-[7px] font-mono text-neutral-500">
              <span>100 m</span>
              <span>300 m (DEFAULT)</span>
              <span>500 m</span>
            </div>
          </div>

          {/* Exposure/Shutter slider */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <div>
              <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest font-bold">EXPOSURE GAIN VALUE (EV)</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-display font-black text-lg text-emerald-400 tracking-tight">+{exposureVal.toFixed(1)}</span>
                <span className="text-[8px] font-mono text-neutral-400 uppercase">AUTO_GAIN</span>
              </div>
            </div>

            {/* Range slider input */}
            <input 
              type="range" 
              min="5.0" 
              max="12.0" 
              step="0.1"
              value={exposureVal} 
              onChange={(e) => setExposureVal(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-neutral-900 rounded-lg cursor-pointer" 
            />
            <div className="flex justify-between text-[7px] font-mono text-neutral-500">
              <span>EV +5.0</span>
              <span>EV +8.3 (NEUTRAL)</span>
              <span>EV +12.0</span>
            </div>
          </div>

          {/* Mechanical Gyro/Compass Circle Section */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-3">
            <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest font-bold text-center block w-full border-b border-white/5 pb-2">3D MECHANICAL compass GYRO</span>
            
            {/* Spinning Dial Container */}
            <div className="relative w-36 h-36 flex items-center justify-center rounded-full bg-neutral-950 border border-white/5 shadow-inner">
              
              {/* Spinning mechanical outer ring */}
              <div 
                className="absolute inset-2 border border-white/10 rounded-full flex items-center justify-center transition-transform duration-500"
                style={{ transform: `rotate(${-yaw}deg)` }}
              >
                {/* N, S, E, W markers */}
                <span className="absolute top-1 text-[8px] font-mono font-bold text-red-500">N</span>
                <span className="absolute bottom-1 text-[8px] font-mono font-bold text-white">S</span>
                <span className="absolute right-1 text-[8px] font-mono font-bold text-white">E</span>
                <span className="absolute left-1 text-[8px] font-mono font-bold text-white">W</span>

                {/* Subdegrees notches */}
                <div className="absolute inset-0 border border-dotted border-white/5 rounded-full scale-90" />
                <div className="absolute top-1/2 left-2 right-2 h-[0.5px] bg-white/5" />
                <div className="absolute left-1/2 top-2 bottom-2 w-[0.5px] bg-white/5" />
              </div>

              {/* Central glowing indicator needle */}
              <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                
                {/* Simulated heading arrow */}
                <div 
                  className="w-1.5 h-16 bg-gradient-to-b from-emerald-400 via-emerald-400/50 to-transparent relative rounded transition-transform duration-300"
                  style={{ transform: `rotate(${yaw}deg)` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 bg-emerald-400 rotate-45 border border-neutral-950" />
                </div>

                {/* Center cap readout */}
                <div className="absolute w-12 h-12 rounded-full bg-[#0E0E0E] border border-white/10 flex flex-col items-center justify-center shadow-lg">
                  <span className="font-mono text-[6px] text-neutral-500 leading-none">HEADING</span>
                  <span className="font-display font-black text-[11px] text-white leading-none mt-1">{yaw}° E</span>
                </div>
              </div>

              {/* Degrees tags around dial */}
              <div className="absolute -top-1.5 px-2 py-0.5 rounded-full bg-blue-500 text-white font-mono text-[8px] font-bold shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                {yaw}° YAW
              </div>
            </div>

            {/* Dynamic GPS coordinate log */}
            <div className="w-full text-center py-2.5 bg-black/40 rounded-xl border border-white/5">
              <span className="block font-mono text-[7px] text-neutral-500 uppercase">GPS_COORD_LOCK</span>
              <span className="font-mono text-[9px] font-bold text-white tracking-widest block mt-0.5">{activeLoc.coords}</span>
              <span className="text-[7px] font-mono text-emerald-400 block mt-1 uppercase">SATELLITES_CONNECTED: 18_SYS</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
