export async function defineCustomElements(win = window) {
  if (!win?.customElements?.get('dotlottie-player')) {
    await import('@dotlottie/player-component/dist/dotlottie-player.mjs')
  }
}
