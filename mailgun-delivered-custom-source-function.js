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
		'event-data': { recipient, event, tags, message, storage }
	} = body;
	const { url } = storage;
	const {
		headers: { subject, from }
	} = message;
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
		event: 'Email Delivered',
		timestamp: ISOString,
		properties: {
			emailSubject: subject,
			from,
			event: event,
			emailStorageURL: url,
			tags: tags,
			emailPlatform: 'mailgun'
		}
	});
}
