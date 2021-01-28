import React from 'react'
import p from './Preloader.module.css'

export class Preloader extends React.Component {
    interval: any;
    width = 0;
    margin = 0;
    delta = 0;
    block: any
    constructor(props: any) {
        super(props);
        this.block = React.createRef()
    }
    componentDidMount() {
        this.interval = setInterval((a = 0.5) => {
            if ( this.width !== 100) {
                this.block.current.style.marginLeft = 0;
                this.width += a;
                this.block.current.style.width = `${this.width}%`;
            } else {
                if ( this.margin !== 100) {
                    this.margin += a;
                    this.delta =  this.width - this.margin;
                    this.block.current.style.marginLeft = `${this.margin}%`;
                    this.block.current.style.width = `${this.delta}%`;
                } else {
                    this.width = 0;
                    this.margin = 0;
                }
            }
        }, 5);
    }

    componentWillUnmount() {
        this.block.current.style.marginLeft = 0;
        this.block.current.style.width = 0;
        clearInterval(this.interval);
        this.width = 0;
        this.margin = 0;
        this.delta = 0;
    }

    render () {
        return  <div className={p.preloader}><div className={p.block} ref={this.block}/></div>
    }
}
