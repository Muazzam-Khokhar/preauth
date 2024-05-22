import expres from 'express'
import{
    getAllProviders,
    getProviderById,
    addProvider,
} from '../controllers/providerControllers.js'

const router = expres.Router();

router.get('/',getAllProviders)
router.get('/:id',getProviderById)
router.post('/',addProvider)

export default router