import styled from '@emotion/styled';


export const SearchList = styled.ul`
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-direction: row;
}
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: blue;
  justify-content: space-between;
`;

export const Text = styled.p`
  margin: 0;
  :not(:last-child) {
    margin-right: 5px;
  }
`;

export const Button = styled.button`
font-size: 12px;
width: 96px;
height: 24px;
background-color: white;
border: 1px solid gray;
border-radius: 5px;
cursor: pointer;
&:hover, &:focus {
  border-color: red;
  color: red;
}
`;

