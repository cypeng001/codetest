//PathHelper
exports.isRelative = function (path) {
	var code = path[0];
	if(code == '\\' || code == '/') {
		return true;
	}
	else if(code == '.') {
		code = path[1];
		if(code == '\\' || code == '/') {
			return true;
		}
	}
	return false;
};