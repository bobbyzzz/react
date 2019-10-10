import React, { Component } from 'react'
import axios from '../../http';
import './index.css'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [],
            contentList: []
        }
    }
    getData = () => {
        axios.get("other/recommended_collections").then(res => {
            // console.log(res.data)
            this.setState({
                navList: res.data
            })
        })
        axios.get("other/comment_list").then(res => {
            // console.log(res.data)
            this.setState({
                contentList: res.data
            })
        })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div className="home">
                <div className="header">
                    <div className='Header-l'>
                        <img src="//cdn2.jianshu.io/asimov/src/assets/image/nav-logo.faf216af.png" alt="" />
                        <p>创作你的创作</p>
                    </div>
                    <div className='Header-r'>
                        免费下载&nbsp;&nbsp;&nbsp;
                    <i className='fa fa-angle-right'></i>
                    </div>
                </div>
                <div className="nav">
                    <div className="title">
                        <p>热门专题</p>
                        <p>换一批</p>
                    </div>
                    <ul>
                        {this.state.navList.map((item, index) =>
                            <li key={index}>{item.title}</li>
                        )}
                    </ul>
                </div>
                <div className="main">
                    <ul>
                        {this.state.contentList.map((item, index) => (
                            <Link key={index} to={'/Details/' + item.object.data.slug}>
                                <li>
                                    <div>
                                        <h3>
                                            {item.object.data.title}
                                        </h3>
                                        <p className='content'>{item.object.data.public_abbr}</p>
                                        <p>
                                            <i className='fa fa-diamond'></i>
                                            <span>{item.object.data.total_fp_amount / 1000}</span>
                                            <span>{item.object.data.user.nickname}</span>
                                            <i className='fa fa-heart-o'></i>
                                            <span>{(item.object.data.likes_count / 1000).toFixed(1)}k</span>
                                        </p>
                                    </div>
                                    <div>
                                        <img src={item.object.data.user.avatar} alt="" />
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}