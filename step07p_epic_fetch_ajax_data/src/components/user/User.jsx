import React, { Component } from 'react';
import './User.css';

class User extends Component {

  render() {
    return (
      <div >
        <div>
            In User jsx
            <button onClick={this.props.fetchUserData}>Fetch Data</button><br/>
        </div>
        <div>
          <h2>Repos</h2>
          <ul>
            {
              this.props.repoList.map((item,index)=>{
                return <li key={'repo_'+index}>{item.name}</li>
              })
            }
            
          </ul>            
        </div>
        <hr/>
        <div>
          <h2>Followers</h2>
          <ul>
            {
              this.props.followersList.map((item,index)=>{
                return <li key={'follower_'+index}>{item.login}</li>
              })
            }
          </ul>            
        </div>
      </div>
    );
  }
}

export default User;
