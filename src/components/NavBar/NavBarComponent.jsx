import NavBar from '../UI/NavBar/NavBar'
import Box from '@mui/material/Box'
import classes from '../Layouts/PC/PCLayout.module.css'
import Binance from '../../public/binance.png';
import { faAdjust, faBars, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarItem from '../UI/NavBarItem/NavBarItem'
import Divider from '@mui/material/Divider';

const itemSet1 = [
  {id: 'it1', children: <FontAwesomeIcon icon={faBars} size={`lg`}/>,
    dropDown: true,},
  {id: 'it2', children: `Buy Crypto`,
    newChip: true, dropDown: true,},
  {id: 'it3', children: `Market`,},
  {id: 'it4', children: `Trade`,
    dropDown: true,},
  {id: 'it5', children: `Derivatives`,
    dropDown: true,},
  {id: 'it6', children: `Finance`,
    dropDown: true,},
  {id: 'it7', children: `NFT`,
    newChip: true, dropDown: true,},
]


const itemSet2 = [
  {id: 'it1', children: `Log In`,},
  {id: 'it2', children: `Register`,
    variant: `contained`,},
]

const itemSet3 = [
  {id: 'it1', children: `Downloads`,},
  {id: 'it2', children: `English`,},
  {id: 'it3', children: `USD`,},
]

const itemSet4 = [
  {id: 'it1', children: <FontAwesomeIcon icon={faQuestionCircle} size={`lg`}/>,
    justIcon: true,},
]

const itemSet5 = [
  {id: 'it1', children: <FontAwesomeIcon icon={faAdjust} size={`lg`}/>,
    justIcon: true,},
]

const items = [
  {id: `is1`, item: itemSet1,},
  {id: `is2`, item: itemSet2,},
  {id: `is3`, item: itemSet3,},
  {id: `is4`, item: itemSet4,},
  {id: `is5`, item: itemSet5,},
]

const NavBarComponent = (props) => {
  return(
    <NavBar>
      <Box sx={{ width: `10rem`, display: `flex`, alignItems: `center` }}>
          <img width={`100%`} src={Binance} alt="binance"/>
      </Box>
      {
        items.map(is => {
          return(
            <Box key={is.id} className={`${ is.id === 'is2' && 'm-auto me-0' }`}>
              {
                is.item.map(item =>
                  <Box key={item.id} sx={{ display: `inline-block` }}>
                    <NavBarItem justIcon={item.justIcon} variant={item.variant}
                                newChip={item.newChip} dropDown={item.dropDown}>
                      {item.children}
                    </NavBarItem>
                  </Box>
                )
              }
            </Box>
          );
        })
      }
    </NavBar>
  );
}

export default NavBarComponent;