<template>
    <div>
        <section>
            <div class="form">
                <label>
                    Productos
                    <select name="producto" v-model="producto">
                        <option value="0">--Product--</option>
                        <option v-for="(product,index) in productos" :key="index" :value=product.id>
                            {{product.nombre}} - {{product.precio}}
                        </option>
                    </select>
                </label>
                <label>
                    Cantidad
                    <input type="cantidad" v-model="cantidad" />
                </label>
                <button @click="agregarProducto">Agregar</button>
                <button @click="vaciarCarrito">Vaciar</button>
            </div>
            <ul class="overview">
                <li><strong>Carrito</strong></li>
                <li v-for="(product,index) in productosComprados" :key="index">
                    {{ product.nombre }} {{ product.cantidad}}
                </li>
                <li>Total: {{ total }}</li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name:'CarritoDeCompras',
        props:{

        },
        data(){
            return{
                producto: '',
                cantidad: 0,
                productos: [
                    {"id":"1","nombre":"Soda","precio":10},
                    {"id":"2","nombre":"Papitas","precio":12},
                    {"id":"3","nombre":"Galletas","precio":11},
                    {"id":"4","nombre":"Agua","precio":7},
                    {"id":"5","nombre":"Jugo","precio":8},
                ],
                productosComprados: [],
                total: 0
            }
        },
        methods:{
            agregarProducto: function(){
                // console.log(this.producto);
                let auxProduct = this.productos[this.producto-1];
                // console.log(auxProduct);
                let productoComprado = {"id":auxProduct.id, "nombre":auxProduct.nombre, "precio":auxProduct.precio, "cantidad":this.cantidad };
                // console.log(productoComprado);
                let element = this.productosComprados.findIndex(p => p.id == productoComprado.id);
                //console.log(element);
                if(element != -1)
                    this.productosComprados[element].cantidad = parseInt(this.productosComprados[element].cantidad) + parseInt(productoComprado.cantidad);
                else
                    this.productosComprados.push(productoComprado);
                this.total += productoComprado.precio * productoComprado.cantidad;
                //console.log(this.productosComprados);
                this.producto = 0;
                this.cantidad = 0;
            },
            vaciarCarrito: function(){
                this.productosComprados = [];
                this.total = 0;
                this.producto = 0;
                this.cantidad = 0;
            }

        },
    }
</script>
