import axios from 'axios';
import { Component, createContext } from 'react';



export const RequestContext = createContext({
    setPosts: () => {}, 
    allPosts: []
});

class RequestProvider extends Component {

  state = {
    allPosts: []
  }
 
  addPostsToState = async () => {
    const request = await axios.get("/allPosts")
    this.setState({ allPosts: request.data })
    console.log(this.state.allPosts)
  }

  componentDidMount = () => {
    this.addPostsToState()
  };

  render() {
    return (
      <RequestContext.Provider
        value={{  
        allPosts: this.state.allPosts,
        setPosts: this.addPostsToState
        }}
      >
        {this.props.children}
      </RequestContext.Provider>
    );
  }
}

export default RequestProvider;