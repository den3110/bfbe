import express from 'express';
import categoryController from './category.controller';
// import { jwtStrategy } from '../../../middleware/strategy';
// import { sanitize } from '../../../middleware/sanitizer';
// import { validateBody, schemas } from '../../../middleware/validator';

export const categoryRouter = express.Router();
categoryRouter.route("/getCategoryHeader").get(categoryController.getCategoryListHeader)
categoryRouter.route('/getAllCategory').get( categoryController.getCategoryList);
categoryRouter.route('/getAllSubCategory').get( categoryController.getSubCategoryList);
categoryRouter.route('/getAllSubChildCategory').get( categoryController.getSubChildCategoryList);
categoryRouter.route('/create').post(categoryController.addCategory);
categoryRouter.route('/list').get(categoryController.getList);
categoryRouter.route('/getCategoryById').get( categoryController.getCategoryById);
categoryRouter.route('/create-sub').post( categoryController.addSubCategory);
categoryRouter.route('/create-sub-child').post(categoryController.addSubChildCategory);
categoryRouter.route('/update').post(categoryController.updateCategory);

//category list 
categoryRouter.route('/main-list').get(categoryController.getMainList);
categoryRouter.route('/main-list/update').post(categoryController.getMainListUpdate);
//sub category list 
categoryRouter.route('/sub-list').get(categoryController.getSubCategory);
categoryRouter.route('/sub-list/update').post(categoryController.getSubCatListUpdate);
categoryRouter.route('/sub-list/delete').delete( categoryController.getDeletedSubCatList);
//child category
categoryRouter.route('/child/deleteById').delete( categoryController.deleteCategory);

//get all category by slug
categoryRouter.route('/cn/list').get(categoryController.getAllCategoryBySlug);
categoryRouter.route('/c/:slug/:id').get(categoryController.filterByCategoryList);

//Searching filter category
categoryRouter.route('/catlogsearch/child-category').post(categoryController.getFilterbyCategory);
categoryRouter.route('/catlogsearch/product').post( categoryController.getProductBySubcategory);

//mobile view
categoryRouter.route('/mobile/getAllCategory').get(categoryController.getAllMobileCategory);
categoryRouter.route('/mobile/getAllSubCategoryById').post(categoryController.getAllSubCategoryById);















