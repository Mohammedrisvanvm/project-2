import { Router } from "express";
import { addVehicleController, getVehiclesController } from "../../controllers/venderController/vehicleController/vehicleController";

const vendorVehicleRouters=Router()


vendorVehicleRouters.post('/addvehicle',addVehicleController)
vendorVehicleRouters.get('/vehicles',getVehiclesController)




export default vendorVehicleRouters