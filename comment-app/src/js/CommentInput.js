import React,{Component} from 'react';

export default class CommentInput extends Component{
	constructor(){
		super();
		this.state={
			username:'',
			commentContent:''
		};
	}
	
	handleSubmit(){
		if(this.props.onSubmit){
			const {username,commentContent} = this.state;
			let createTime = +new Date();
			this.props.onSubmit({username,commentContent,createTime});
		}
		this.setState({
			commentContent:''
		});
	}
	
	usernameChange(e){
		this.setState({
			username:e.target.value
		});
	}
	
	contentChange(e){
		this.setState({
			commentContent:e.target.value
		});
	}
	
	storeUsername(e){
		localStorage.setItem('username',e.target.value);
	}
	
	componentWillMount(){
		const username = localStorage.getItem('username');
		if(username){
			this.setState({
				username
			});	
		};
	}
	
	componentDidMount(){
		this.textarea.focus();
	}
	
	render(){
		return (
			<div className="comment-input">
				<div className="input-field">
					<span className="input-field-name">用户名 :</span>
					<div className="input-field-text">
						<input value={this.state.username} 
							onBlur={this.storeUsername.bind(this)}
							onChange={this.usernameChange.bind(this)}
							/>
					</div>
				</div>
				<div className="input-field">
					<span className="input-field-name">评论内容 :</span>
					<div className="input-field-text">
						<textarea value={this.state.commentContent}
							ref = {(area) => {this.textarea = area}}
							onChange={this.contentChange.bind(this)}
							/>
					</div>
				</div>
				<div className="input-btn">
					<button onClick={this.handleSubmit.bind(this)}>发布</button>
				</div>
			</div>
		);
	}
}
