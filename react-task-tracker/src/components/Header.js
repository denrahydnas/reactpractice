import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <div>
            <header className='header'>
                <h1> {title} </h1>
                <Button color='green' text='Add' onClick={onClick} />
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/* CSS in JS styling option

   const headingStyle = {
        color: 'blue',
        backgroundColor: 'green',
        textAlign: 'center',
    }
*/

export default Header