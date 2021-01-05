declare global { interface Window { M: any; } }

export const info = (html: string) => window.M.toast({ html, classes: "info" });

export const warning = (html: string) => window.M.toast({ html, classes: "warning" });

export const danger = (html: string) => window.M.toast({ html, classes: "danger" });