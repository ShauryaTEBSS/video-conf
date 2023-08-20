// In App.js

useEffect(() => {
  if (!callObject) return;

  const events = ["joined-meeting", "left-meeting", "error"];

  function handleNewMeetingState(event) {
    event && logDailyEvent(event);
    switch (callObject.meetingState()) {
      case "joined-meeting":
        // update component state to a "joined" state...
        break;
      case "left-meeting":
        callObject.destroy().then(() => {
          // update component state to a "left" state...
        });
        break;
      case "error":
        // update component state to an "error" state...
        break;
      default:
        break;
    }
  }

  // Use initial state
  handleNewMeetingState();

  // Listen for changes in state
  for (const event of events) {
    callObject.on(event, handleNewMeetingState);
  }

  // Stop listening for changes in state
  return function cleanup() {
    for (const event of events) {
      // In App.js

/**
 * Creates a new call room.
 */
const createCall = useCallback(() => {
  // update component state to a "creating" state...
  return api
    .createRoom()
    .then(room => room.url)
    .catch(error => {
      // update component state to an "error" state...
    });
}, []);
      // In App.js

/**
 * Starts joining an existing call.
 */
const startJoiningCall = useCallback(url => {
  const callObject = DailyIframe.createCallObject();
  // update component state to a "joining" state...
  callObject.join({ url });
}, []);
      // In App.js

/**
 * Starts leaving the current call.
 */
const startLeavingCall = useCallback(() => {
  if (!callObject) return;
  // update component state to a "leaving" state...
  callObject.leave();
}, [callObject]);
      
      callObject.off(event, handleNewMeetingState);
    }
  };
}, [callObject]);
// In App.js

// The STATE_* consts below are defined in the demo app, and reflect Meeting State

// Only enable "leave" button when we know we're not mid-operation
const enableCallButtons = [STATE_JOINED, STATE_ERROR].includes(appState);

// Only enable "start" button when we know we're not mid-operation
const enableStartButton = appState === STATE_IDLE;
