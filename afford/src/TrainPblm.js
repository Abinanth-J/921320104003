import React, { Component } from 'react'
import axios from 'axios';

export class TrainPblm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {    
         tdata: []
      }
    }

    componentDidMount(){
        let apiUrl = "http://104.211.219.98/train/register";
        let payload = {
            companyName: "Dindigul Central",
            ownerName: "Abinanth",
            rollNo: "921320104003",
            ownerEmail:"abinanth1423@gmail.com",
            accessCode: "htKrDr"
        }
        // try{
        // fetch(apiUrl, {
        //     method: "POST",
        //     mode: "cors",
        //     cache: "no-cache",
        //     body: JSON.stringify(payload)
        // })
        
        // .then(response =>{
        //     response.json()
        //     // this.setState({tdata: response.data})
        // }).then(data=> {
        //     console.log(data)
        // })
        
        // .catch(error =>{
        //     console.log(error);
        // })
        // }
        // catch(error) {
        //     console.log(error)
        // }

        this.getAuthorizationDetail();

    }

    getAuthorizationDetail() {
        let apiUrl = "http://20.244.56.144/train/auth"
        let auth={
            "companyName": "Dgl Central",
            "clientID": "4f50ebe3-d331-489c-a21c-fd0937532f4c",
            "clientSecret": "aPQKeXcbJzIfnZAz",
            "ownerName": "Abinanth",
            "ownerEmail": "abinanth1423@gmail.com",
            "rollNo": "921320104003"
        }
        try{
            fetch(apiUrl, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                body: JSON.stringify(auth)
            })
            .then(response =>{
                response.json()
                // this.setState({tdata: response.data})
            }).then(data=> console.log(data))
            .catch(error =>{
                console.log(error);
            })
            }
            catch(error) {
                console.log(error)
            }
    }

  render() {
    return (
      <div>
      <b>Train Datas</b>
      {/* {
        tdata.length?
         tdata.map(tdata=> <div key={tdata.id}>{tdata.title}</div>):
        null
      } */}
      </div>
    )
  }
}

export default TrainPblm;