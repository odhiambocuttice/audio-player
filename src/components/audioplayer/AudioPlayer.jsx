import React, { useRef, useState, useEffect } from "react";
import "../../styles/App.css";
import { AudioDetails } from "./AudioDetails";
import { PlayPauseButton } from "./PlayPauseButton";

export const AudioPlayer = (props) => {
  // const audioElement = useRef(null);

  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(50)

  // Destructure for conciseness
  const { title, artist, color, image, audioSrc } = props.tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;
  

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
     -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #02484a), color-stop(${currentPercentage}, #FAF0CB))
   `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);

  };

  const onVol = (value) => {
    // Clear any timers already running
    audioRef.current.volume = value;
    setVolume(audioRef.current.volume);

  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(props.tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < props.tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  });

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex, audioSrc]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // useEffect(() => {
  //   if (isPlaying || trackIndex) {
  //     document.title = title + " by " + artist;
  //   }
  // }, [trackIndex, isPlaying, artist, title]);

  return (
    <>
      <div className="audio-player">
        <div className="track-info">
          <img
            className="artwork"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
          />

          <h2 className="title">{title}</h2>
          <h3 className="artist">{artist}</h3>
          <PlayPauseButton
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            setIsPlaying={setIsPlaying}
          />

          {/* <div>
            <audio
              controls
              controlsList="nodownload"
              // src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-
              // a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
              // src={props.songs[props.currentSongIndex].src}
              src={audioSrc}
              ref={audioElement}
              preload="metadata"
            ></audio>
          </div> */}

          {/* <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          /> */}
          
          <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          onChange={(e) => {
            onVol(e.target.valueAsNumber)
          }}
          className="input"
          style={{ background: trackStyling }}
        />
        </div>

        <AudioDetails
          trackIndex={trackIndex}
          activeColor={color}
          isPlaying={isPlaying}
        />
      </div>
      <div className="navbar">
        <div className="bottom">
          <h2 className="title-bottom">{title}</h2>
          <h3 className="artist-bottom">{artist}</h3>
        </div>

        <PlayPauseButton
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
};
