// Learn more about source functions API at
// https://segment.com/docs/connections/sources/source-functions

/**
 * Handle incoming HTTP request
 *
 * @param  {FunctionRequest} request
 * @param  {FunctionSettings} settings
 */
async function onRequest(request, settings) {
	const body = request.json();
	const {
		'event-data': { recipient, event, tags }
	} = body;
	const uuid = crypto.randomUUID();
	const timestamp = new Date();
	const ISOString = timestamp.toISOString();

	Segment.identify({
		anonymousId: uuid,
		traits: {
			email: recipient
		}
	});
	Segment.track({
		anonymousId: uuid,
		event: 'Email Opened',
		timestamp: ISOString,
		properties: {
			event: event,
			tags: tags,
			emailPlatform: 'mailgun'
		}
	});
}
