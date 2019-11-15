import React from "react";

import styled from "styled-components";


export default function CharacterCard(props) {


// heres the styling for the cards


  const Card = styled.div`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    margin-top: 1%;
    margin-bottom: 1%;
    display: flex;
    justify-content: space-between;
  `;

  const CardImg = styled.img`
    width: auto;
    height: auto;
    padding: 0;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `;

  const CardInfo = styled.div`
    tex-align: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    width: 50%;
  `;


  // the actual card and data props

return (
  <div className="character-card">
    <Card>
      <CardImg src={props.character.image} />
      <CardInfo>
        <div>Name: {props.character.name}</div>
        <div>Episodes: {props.character.episode.length}</div>
        <div>Gender: {props.character.gender}</div>
        <div>ID: {props.character.id}</div>
        <div>Location: {props.character.location.name}</div>
        <div>Origin: {props.character.origin.name}</div>
        <div>Species: {props.character.species}</div>
        <div>Status: {props.character.status}</div>
      </CardInfo>
    </Card>
  </div>
)

}