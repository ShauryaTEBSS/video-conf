// In Call.js

useEffect(() => {
  if (!callObject) return;

  const events = [
    "participant-joined",
    "participant-updated",
    "participant-left"
  ];

  function handleNewParticipantsState(event) {
    event && logDailyEvent(event);
    dispatch({
      type: PARTICIPANTS_CHANGE,
      participants: callObject.participants()
    });
  }

  // Use initial state
  handleNewParticipantsState();

  // Listen for changes in state
  for (const event of events) {
    callObject.on(event, handleNewParticipantsState);
  }

  // Stop listening for changes in state
  return function cleanup() {
    for (const event of events) {
      callObject && callObject.off(event, handleNewParticipantsState);
    }
  };
}, [callObject]);
