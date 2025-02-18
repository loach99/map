declare module '*.module.css' {
	const classes: Record<string, string>

	export default classes
}

declare module '*.module.scss' {
	const classes: Record<string, string>

	export default classes
}

declare module '*.module.sass' {
	const classes: Record<string, string>

	export default classes
}

declare module '*.svg' {
	import * as React from 'react'

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>
	const src: string

	export default src
}

declare module '*.png' {
	const content: unknown

	export default content
}

declare module '*.jpg' {
	const content: unknown

	export default content
}

declare module '*.json' {
	const content: unknown

	export default content
}
