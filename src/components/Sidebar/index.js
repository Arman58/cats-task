import {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { getCats, getCategories, changeCategory } from '../../state/actions/actions';
import styled from 'styled-components'

const StyledSidebar = styled.div`
    background: #99ccff;
    padding: 2%;
    width: 100%;
    min-height: 100vh
`;

const StyledButtonCategory = styled.button`
    &:hover {
            cursor: pointer;
        box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
},
    }
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-top: 20px;
`;


const Sidebar = ({ getCategories, categories, getCats, changeCategory }) => {
    const [imageCategory, setImageCategory] = useState({id: null, name: ''})
    const setCategory = (imageCategory) => {
        setImageCategory(imageCategory.id)
        changeCategory(imageCategory)
    }
    useEffect(() => {
        getCats(10, imageCategory)
    }, [getCats, imageCategory])


    useEffect(() => {
        getCategories()
    }, [getCategories])


    return (
        <StyledSidebar>
            {categories && categories.map((item) => (
                <div key={item.id}>
                    <StyledButtonCategory onClick={() => setCategory(item)}>{item.name}</StyledButtonCategory>
                </div>
            ))}
        </StyledSidebar>
    )
}

const mapStateToProps = (state) => ({
    categories: state.categories
})
const mapDispatchToProps = {
    getCategories,
    getCats,
    changeCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)