// Learn more about destination functions API at
// https://segment.com/docs/connections/destinations/destination-functions

/**
 * Handle track event
 * @param  {SegmentTrackEvent} event
 * @param  {FunctionSettings} settings
 */
async function onTrack(event, settings) {
	// Learn more at https://segment.com/docs/connections/spec/track/
	const endpoint = 'https://heapanalytics.com/api/track'; // replace with your endpoint
	let response;

	const heapEvent = {
		app_id: '{{insert HEAP app ID}}', // HEAP Development Environment ID
		identity: event.context.traits.customer_id, //Remap HEAP identity to customer_id
		event: event.event, // Event Name
		properties: {}
	};
