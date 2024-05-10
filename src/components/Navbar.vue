<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
    <div className="navbar bg-[#f5eedb1e]">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    Menu
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f5eedb] rounded-box w-52">
                    <li>
                        <RouterLink to="/smart">Smart Grid</RouterLink>
                    </li>
                    <li>
                        <details>
                            <summary>Goals ONU</summary>
                            <ul className="p-2">
                                <li>
                                    <RouterLink to="/goal3">Goal 3</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/goal11">Goal 16</RouterLink>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <RouterLink to="/siccita">Siccità</RouterLink>
                    </li>
                </ul>
            </div>
            <RouterLink to="/" class="btn btn-ghost text-2xl">Ed. Civica</RouterLink>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
                <li>
                    <RouterLink to="/smart">Smart Grid</RouterLink>
                </li>
                <li>
                    <details>
                        <summary>Goals ONU</summary>
                        <ul className="p-2">
                            <li>
                                <RouterLink to="/goal3">Goal 3</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/goal11">Goal 16</RouterLink>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <RouterLink to="/siccita">Siccità</RouterLink>
                </li>
            </ul>
        </div>
        <div className="navbar-end">
            <button class="btn btn-sm bg-red-500 text-blue-50" @click="openModal">Crediti</button>

            <dialog :id="modalId" class="modal" ref="modalRef">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Crediti</h3>
                    <p class="py-4">Questo sito hanno contribuito</p>
                    <div class="modal-action">
                        <button class="btn" @click="closeModal">Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modalId: 'my_modal_1'
        };
    },
    methods: {
        openModal() {
            this.$refs.modalRef.showModal();
        },
        closeModal() {
            this.$refs.modalRef.close();
        }
    }
};
</script>