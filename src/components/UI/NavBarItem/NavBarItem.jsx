import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip'
import classes from './NavBarItem.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/material'

const NavBarItem = (props) => {
  const justIcon = props.justIcon || false;
  const variant = props.variant || `text`;
  const newChip = props.newChip || false;
  const dropDown = props.dropDown || false;
  let bgColor = `transparent`;

  if (variant === `contained`){
    bgColor = `#FFB81C`;
  }


  return(
    <Fragment>
      {
        justIcon ?
          <IconButton className={`${classes.iconButton}`}
                      size={`small`} color={`inherit`}>
            {props.children}
          </IconButton>
          :
          <Button className={`${classes.button}`} variant={`${variant}`}
                  sx={{ textTransform: `none`, backgroundColor: bgColor, ml: 1}} color={`inherit`}>
            <div style={{ display: `flex` }}>
              {props.children}
              {
                !newChip || <Chip sx={{ backgroundColor: `#FFB81C`, cursor: `pointer`, ml: 1 }}
                                  label={`new`} size={`small`}/>
              }
              {
                !dropDown || <ArrowDropDownIcon sx={{ ml: 1 }}/>
              }
            </div>
          </Button>
      }
    </Fragment>
  );
}

export default NavBarItem;