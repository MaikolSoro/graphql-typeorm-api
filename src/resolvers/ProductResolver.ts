import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from 'type-graphql';
import { Product } from '../entity/Product';

@InputType()
class ProductInput {
	@Field()
	name: string;
	@Field()
	quantity: number;
}
	
@Resolver()
export class ProductResolver {
	
	@Mutation(() => Product)
	async createProduct(
		@Arg("variables", () => ProductInput) variables: ProductInput
	) {
		const newProduct = Product.create(variables);
		return newProduct.save();
		
	}
	@Mutation(() => Boolean)
	async deleteProduct(@Arg("id", () => Int) id: number) {
	  await Product.delete(id);
	  return true;
	}

	@Query(() => [Product])
	products() {
		return Product.find()
	}

}