import Request from ".."

export function getEntireRoomList(offset = 0, size = 20) {
	return Request.get({
		url: "entire/list",
		params: {
			offset,
			size,
		},
	})
}
