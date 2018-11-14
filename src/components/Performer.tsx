import { setupPerformer } from '@musical-patterns/performer'
import * as React from 'react'

class Performer extends React.Component {
    private readonly performer: React.RefObject<HTMLDivElement>

    public constructor(props: {}) {
        super(props)
        this.performer = React.createRef()
    }

    public componentDidMount(): void {
        if (this.performer.current) {
            const performer: HTMLDivElement = setupPerformer()
            this.performer.current.appendChild(performer)
        }
    }

    public render(): React.ReactNode {
        return <div {...{ ref: this.performer }} />
    }
}

export default Performer
