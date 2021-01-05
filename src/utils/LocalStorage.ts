export default new Proxy<{
	[key in PropertyKey]: any
}>(
	{},
	{
		get(target, property) {
			const value = localStorage.getItem(property as string);
			target[property as string] = value ? JSON.parse(value) : null;
			return target[property as string];
		},
		set(target, property, value) {
			target[property as string] = value;
			localStorage.setItem(property as string, JSON.stringify(value));
			return true;
		},
	}
);
