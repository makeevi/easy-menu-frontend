import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import SearchSvg from './common/svg/SearchSvg';

const SearchFormView: React.FunctionComponent = () => {
    return (
        <div style={{margin:'20px'}}>
        <Form.Label htmlFor="inputSearch">Поиск</Form.Label>

        <InputGroup>
            <FormControl aria-label="Text input"  type='text'/>
            
            <Button variant="primary"><SearchSvg/></Button>
        </InputGroup>
        <Form.Text muted>
            Поиск компонентов в справочнике
        </Form.Text>
        </div>
    );
};

export default SearchFormView;