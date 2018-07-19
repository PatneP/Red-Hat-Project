import React, { Component } from 'react';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import '../styles/App.css';

class ProdImg extends Component {
	constructor(){
		super();
		this.state ={
			pictures : []
			}
		}
	componentDidMount(){
		fetch('https://outlook.office.com/owa/')
		.then()

