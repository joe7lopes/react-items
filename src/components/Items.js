import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import DeleteItemPannel from './DeleteItemPannel';

class Items extends React.Component{

    constructor(){
        super();
        this.state = {
            searchText:'',
            selectedItem: '',
            isLoading: false
        }

        this.handleOnSearch = this.handleOnSearch.bind(this);
         this.handleOnDeleteItem = this.handleOnDeleteItem.bind(this);
    }

    handleOnSearch(event){
        const {value} = event.target;
        this.setState({searchText: value});
    }

    handleOnSelectedItem(item){
        this.setState({selectedItem:item});
    }
    
    handleOnDeleteItem(){
        const { selectedItem } = this.state;
        console.log(" deleted", selectedItem);
        //deleteShop(selectedShop);
    }
    render(){
        const{ isLoading,searchText, selectedItem} = this.state;
        const itemsHeaders = ["#","name","address","comments"];
        const items = [{
            id:1,
            name:"item1",
            address:"address1",
            comments:"comments1"
        },{
            id:2,
            name:"items2",
            address:"address2",
            comments:"comments2"
        }];

        const filteredItems = items.filter( (item) => {
            return item.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
        });

        //generate table header
        const itemHeaders = itemsHeaders.map((header, index) => {
           return( 
                <th key={index}>{header}</th>
           );
        });

        //generate table rows
        const itemRows = filteredItems.map((item) => {
        return (
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.comments}</td>
                    <td> <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#confirmDelete" onClick={this.handleOnSelectedItem.bind(this,item)}>Eliminar</button></td>
                </tr>   
            );
        });

        return(
              <div>
                <div className="container">
                    { isLoading ? <LoadingSpinner/>
                    :<div>
                        <div className="input-group" style={{marginBottom:'30px'}}>
                            <span className="input-group-addon">
                            <i className="glyphicon glyphicon-search"></i>
                            </span>
                            <input type="text" className="form-control" style={{width:'300px'}} onChange={this.handleOnSearch}/>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>{itemHeaders}</tr>
                            </thead>
                            <tbody>
                                {itemRows}
                            </tbody>
                        </table>
                    </div>
                    }
                </div>
                <DeleteItemPannel item={selectedItem} onDelete={this.handleOnDeleteItem}/>
        </div>
        );
    }
}

export default Items;