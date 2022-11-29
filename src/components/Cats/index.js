import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getCats } from '../../state/actions/actions';
import Cat from "../Cats/Cat";
import styled from 'styled-components'

const StyledCatsContent = styled.div`
    background: #e6e6e6;
    padding: 2%;
    text-align: center;
    min-height: 100vh
`
const StyledBoardItems = styled.div`
display: grid;
justify-content: space-around;
gap:20px;
grid-template-columns:  repeat(4, 200px);
`

const StyledMoreItemsButton = styled.button`
&:hover,focus-visible{
    --_p: 0%;
    --_i: 1;
},
&:active{
    text-shadow: none;
    color: var(--c);
    box-shadow: inset 0 0 9e9q #0005;
    transition: 0s;
},
--c: #fff;
background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat,
  #004dff;
color: white;
border: none;
transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
  calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
outline-offset: .1em;
transition: 0.3s;
font-weight: bold;
font-size: 2rem;
margin: 0;
cursor: pointer;
padding: .1em .3em;
margin-top:150px
`

function Cats({ cats, getCats, category }) {

    const [limit, setLimit] = useState(10)

    const limitImage = () => {
        setLimit((prev) => prev + 10);
    }

    useEffect(() => {
        getCats(limit, category.id)
    }, [limit, category.id, getCats])
    return (
        <StyledCatsContent>
            <StyledBoardItems>
                {cats && cats.map((item, index) => (
                    <Cat key={index.toString()} url={item.url} />
                ))}
            </StyledBoardItems>
            <StyledMoreItemsButton onClick={limitImage}>Load more images</StyledMoreItemsButton>
        </StyledCatsContent>
    )
}

const mapStateToProps = (state) => ({
    cats: state.cats,
    category: state.category
})
const mapDispatchToProps = {
    getCats
}

export default connect(mapStateToProps, mapDispatchToProps)(Cats)