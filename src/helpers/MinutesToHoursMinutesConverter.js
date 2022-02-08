export function convertMinutesToHoursMinutes(n) {
	const num = n > 0 ? n : 0;
	const hours = Math.floor(num / 60);
	const minutes = Math.round((num / 60 - hours) * 60);
	return `${hours}:${minutes}`;
}
