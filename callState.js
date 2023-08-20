// In callState.js

function getCallItems(participants) {
  let callItems = { ...initialCallState.callItems }; // Ensure we *always* have a local participant
  for (const [id, participant] of Object.entries(participants)) {
    callItems[id] = {
      videoTrackState: participant.tracks.video,
      audioTrackState: participant.tracks.audio,
    };
    if (shouldIncludeScreenCallItem(participant)) {
      callItems[id + '-screen'] = {
        videoTrackState: participant.tracks.screenVideo,
        audioTrackState: participant.tracks.screenAudio,
      };
    }
  }
  return callItems;
}
