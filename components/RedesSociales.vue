<template>
  <div id="social-ads" class="social-container st-sticky-share-buttons">
    <div class="list-enlaces">
      <a
      href="https://api.whatsapp.com/send?phone=51957786882&text=Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20del%20colegio. "
      target="_blank "
      class="st-btn st-third"
    >
      <svg
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
        height="1em"
        width="1em"
        viewBox="0 0 40 40"
      >
        <g>
          <path
            d="m25 21.7q0.3 0 2.2 1t2 1.2q0 0.1 0 0.3 0 0.8-0.4 1.7-0.3 0.9-1.6 1.5t-2.2 0.6q-1.3 0-4.3-1.4-2.2-1-3.8-2.6t-3.3-4.2q-1.6-2.3-1.6-4.3v-0.2q0.1-2 1.7-3.5 0.5-0.5 1.2-0.5 0.1 0 0.4 0t0.4 0.1q0.4 0 0.6 0.1t0.3 0.6q0.2 0.5 0.8
                                    2t0.5 1.7q0 0.5-0.8 1.3t-0.7 1q0 0.2 0.1 0.3 0.7 1.7 2.3 3.1 1.2 1.2 3.3 2.2 0.3 0.2 0.5 0.2 0.4 0 1.2-1.1t1.2-1.1z m-4.5 11.9q2.8 0 5.4-1.1t4.5-3 3-4.5 1.1-5.4-1.1-5.5-3-4.5-4.5-2.9-5.4-1.2-5.5 1.2-4.5 2.9-2.9 4.5-1.2
                                    5.5q0 4.5 2.7 8.2l-1.7 5.2 5.4-1.8q3.5 2.4 7.7 2.4z m0-30.9q3.4 0 6.5 1.4t5.4 3.6 3.5 5.3 1.4 6.6-1.4 6.5-3.5 5.3-5.4 3.6-6.5 1.4q-4.4 0-8.2-2.1l-9.3 3 3-9.1q-2.4-3.9-2.4-8.6 0-3.5 1.4-6.6t3.6-5.3 5.3-3.6 6.6-1.4z "
          />
        </g>
      </svg>
    </a>
    <a
      href="https://www.facebook.com/elengysac/"
      target="_blank "
      class="st-btn st-first"
    >
      <svg
        fill="#fff "
        preserveAspectRatio="xMidYMid meet "
        height="1em "
        width="1em "
        viewBox="0 0 40 40 "
      >
        <g>
          <path
            d="m21.7 16.7h5v5h-5v11.6h-5v-11.6h-5v-5h5v-2.1c0-2 0.6-4.5 1.8-5.9 1.3-1.3 2.8-2 4.7-2h3.5v5h-3.5c-0.9 0-1.5 0.6-1.5 1.5v3.5z "
          />
        </g>
      </svg>
    </a>
    <a
      href="https://www.messenger.com/t/1674577982841908"
      target="_blank "
      class="st-btn st-second"
    >
      <svg
        fill="#fff "
        preserveAspectRatio="xMidYMid meet "
        height="1em "
        width="1em "
        viewBox="0 0 50 50 "
      >
        <g>
          <path
            d="M25,2C12.3,2,2,11.6,2,23.5c0,6.3,2.9,12.2,8,16.3v8.8l8.6-4.5c2.1,0.6,4.2,0.8,6.4,0.8c12.7,0,23-9.6,23-21.5 C48,11.6,37.7,2,25,2z M27.3,30.6l-5.8-6.2l-10.8,6.1l12-12.7l5.9,5.9l10.5-5.9L27.3,30.6z "
          />
        </g>
      </svg>
    </a>

    <a href="https://www.linkedin.com/company/elengy-sac/" target="_blank " class="st-btn st-last">
      <i class="fa fa-linkedin text-white" aria-hidden="true"></i>
    </a>
    </div>
    
  </div>
</template>

<script>
export default {
    mounted(){
       /*  window.onscroll = () => {
        const scroll =document.documentElement.scrollTop || document.body.scrollTop;
        if (scroll > 200) {
            document.getElementById('social-ads').style.left='0';
        }else{
            document.getElementById('social-ads').style.left='-100px';
        }
      } */
    }
};
</script>

<style>
.list-enlaces {
    left: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    position: relative;
    left: 0;
}

.social-container {
    font-family: Helvetica Neue, Verdana, Helvetica, Arial, sans-serif;
    -webkit-transition: all 2s ease-in;
    transition: all 2s ease-in;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: fixed;
    opacity: 1;
    text-align: center;
    top: 50%;
    left: -100px;
    z-index: 99;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.social-container .st-btn {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-size: NaNpx;
    height: 48px;
    line-height: 24px;
    margin-bottom: 0;
    opacity: 1;
    overflow: hidden;
    padding: 12px;
    position: relative;
    text-align: left;
    top: 0;
    left: 0;
    vertical-align: top;
    white-space: nowrap;
    width: 48px;
    text-align: center;
    overflow: hidden;
}

.social-container .st-btn>svg {
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    height: 24px;
    margin-left: 0;
    vertical-align: top;
    width: 24px;
}

.social-container>div {
    clear: left;
    float: left;
}

.social-container .st-toggle,
.st-sticky-share-buttons {
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
}

.social-container .st-toggle {
    right: -48px;
    background: #ccc;
    border-bottom-left-radius: 0;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    line-height: 24px;
    position: relative;
    text-align: center;
    width: 48px;
}

.social-container a:hover svg {
    height: 1.2em;
}

.social-container .st-first {
    background-color: #3b5998;
}

.social-container .st-second {
    background-color: #448aff;
}

.social-container .st-third {
    background-color: #25d366;
}

.social-container .st-last {
    background: #0073B0;
}


.social-container .st-last i{
  font-size: 16px;
  transition: all ease-in-out .2s;
}

.social-container .st-last:hover i {
  font-size: 12px;
}
.social-container .list-enlaces .st-btn:hover{
  width: 60px;
}


@media screen and (max-width: 600px) {
    .social-container {
        display: none;
    }
}
</style>