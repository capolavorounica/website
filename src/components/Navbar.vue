<script setup></script>

<template>
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    Menu
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Smart Grid</a></li>
                    <li>
                        <a>Goals ONU</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Siccità</a></li>
                </ul>
            </div>
            <a className="btn btn-ghost text-2xl">Ed. Civica</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
                <li><a>Smart Grid</a></li>
                <li>
                    <details>
                        <summary>Goals ONU</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details>
                </li>
                <li><a>Siccità</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <button class="btn btn-sm bg-red-500 text-blue-50" @click="openModal">Crediti</button>

            <dialog :id="modalId" class="modal" ref="modalRef">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Hello!</h3>
                    <p class="py-4">Press ESC key or click the button below to close</p>
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