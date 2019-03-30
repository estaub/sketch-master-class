import * as React from 'react'
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import { BlueBox } from './blueBox'


const beige = '#FFDFA6'
const useStyles = makeStyles((theme: Theme) => createStyles({
    bottomBox : {
        width         : '100%',
        height        : 98,
        borderBottom  : '7px solid white',
        borderTop     : '1px solid #ECE7E5',
        display       : 'flex',
        flexDirection : 'column',
        justifyContent: 'space-between',
        alignItems    : 'center',

    },
    iconRow   : {
        width         : '100%',
        paddingTop    : 16,
        display       : 'flex',
        justifyContent: 'space-around',
        alignItems    : 'flex-end',
    },
    bottomRule: {
        width       : 134,
        height      : 5,
        background  : 'black',
        borderRadius: 2.5,
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {},
    label: {
        fontSize:11
    },


}))


function IconButton(props: { name: string, url: string, selected:boolean }) {
    const { name, url, selected } = props
    const c = useStyles()
    return (
        <div className={c.iconButton} style={{color: selected?'#EF8030': '#5B5F78'}}>
            <img src={props.url} className={c.icon} />
            <div className={c.label}>{props.name}</div>
        </div>

    )
}
IconButton.defaultProps = {selected:false}

export function Bottom(props: {}) {
    const c = useStyles()
    return (
        <div className={c.bottomBox}>
            <div className={c.iconRow}>
                <IconButton name='Home' url='./smc/Home icon.png' selected />
                <IconButton name='Discover' url='./smc/Discover icon.png'  />
                <IconButton name='Andrew' url='./smc/Andrew icon.png' />
            </div>
            <div className={c.bottomRule}></div>
        </div>
    )
}
