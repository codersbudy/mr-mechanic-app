import { useSelector } from "react-redux"

export default function Dashboard() {

    const {shops,totalMechanics} = useSelector(state=>state.shopkeeper);

    return <>
        <section className="section">
            <div className="section-header">
                <h1>Dashboard</h1>
            </div>
            <div className="row">
                
                
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                        <div className="card-icon bg-primary">
                            <i className="far fa-store" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Total Shops</h4>
                            </div>
                            <div className="card-body">{shops.length}</div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                        <div className="card-icon bg-danger">
                            <i className="far fa-car-mechanic" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Total Mechanics</h4>
                            </div>
                            <div className="card-body">{totalMechanics.length}</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                        <div className="card-icon bg-warning">
                            <i className="far fa-file" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Reports</h4>
                            </div>
                            <div className="card-body">1,201</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                        <div className="card-icon bg-success">
                            <i className="fas fa-circle" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Online Users</h4>
                            </div>
                            <div className="card-body">47</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
}