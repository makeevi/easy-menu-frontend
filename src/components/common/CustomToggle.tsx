import React from 'react';
import { Button } from 'react-bootstrap';
import ListSvg from './svg/ListSvg';

type Props = {
  children: React.ReactNode;
  onClick: (e: any) => void;
}

const CustomToggle = React.forwardRef((props:Props, ref: React.Ref<HTMLButtonElement>) => (
     <Button variant="link outline-primary" size="sm"
       href=""
       ref={ref}
       onClick={(e) => {
         e.preventDefault();
         props.onClick(e);
       }}
     >
       {props.children}
       <ListSvg/>
     </Button>

   ));

   export default CustomToggle;