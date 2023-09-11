import { Fragment } from 'react';
import './navigation.styles.scss'
import { ReactComponent as CupLogo } from '../../../assets/cup_logo.svg';
import { Outlet, Link } from 'react-router-dom';


const Navigation =()=>{
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='title-container' to=''>
                    <h2 className='title'>Felix Win</h2>
                    <CupLogo className='logo'/>
                </Link>
                <div className='links-container'>
                    <Link className='link' to='info'><h3>Info</h3></Link>
                    <Link className='link' to='jackpot'><h3>Jackpot</h3></Link>
                    <Link className='link' to='winner'><h3>Winner</h3></Link>
                    
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;