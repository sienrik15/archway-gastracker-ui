<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-150 border-radius-xl"
      :style="{
        backgroundImage:
        'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')',
        backgroundPositionY: '50%',
      }"
    >
      <!--<span class="mask bg-gradient-success bg-gradient-profile opacity-6"></span>-->
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
            <div class="avatar avatar-xl rounded-circle" style="background: antiquewhite;color: #a50000;">
                <span>dApp</span>
          </div>
          <!--<div class="avatar avatar-xl position-relative">
            <img
              src="@/assets/img/bruce-mars.jpg"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>-->
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">Contract</h5>
            <p class="mb-0 text-sm font-weight-bold">{{contract_id}}</p>
            <p style="display: flex;" >
                <span style="width: 50%;">
                    <h6 class="pt-2">Total Reward</h6>
                    <div>
                        <span>
                            {{total_rewads[0]?total_rewads[0].rewards/1000000:"0"}}    
                        </span>
                        <span class="px-1">
                            TORII 
                            <!--{{contract_balances.denom}}-->
                        </span>
                    </div>
                </span>
                <span style="width: 50%;">
                    <h6 class="pt-2">Active balances</h6>
                    <div>
                        <span>
                            {{contract_balances.amount/1000000}}
                        </span>
                        <span class="px-1">
                            TORII 
                            <!--{{contract_balances.denom}}-->
                        </span>
                    </div>
                </span>
            </p>
            
            <a href="#filter_rewards"  style="position: absolute; right: 35px; bottom: 23px;">
              <span class="i_history_rewards" style="padding: 3px;" >History rewards</span>
                <i style="font-size: 22px; color: #ffc06b;" class="fa fa-solid fa-filter-circle-dollar"></i>
            </a>
            <!--<p class="mb-0 text-sm font-weight-bold">
                <strong class="h6">Creator: </strong>
                <span>{{contract_info.creator}}</span></p>
            <p class="mb-0 text-sm font-weight-bold">
                <strong class="h6">Admin: </strong>
                <span>{{contract_info.admin}}</span></p>-->
          </div>
        </div>
        <!--<div
          class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0">
            <ul
              class="p-1 bg-transparent nav nav-pills nav-fill"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="px-0 py-1 mb-0 nav-link active"
                  data-bs-toggle="tab"
                  href="javascript:;"
                  role="tab"
                  aria-selected="true"
                >
                  <svg
                    class="text-dark"
                    width="16px"
                    height="16px"
                    viewBox="0 0 42 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-2319.000000, -291.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(603.000000, 0.000000)">
                            <path
                              class="color-background"
                              d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
                            ></path>
                            <path
                              class="color-background"
                              d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                              opacity="0.7"
                            ></path>
                            <path
                              class="color-background"
                              d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                              opacity="0.7"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">App</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-0 py-1 mb-0 nav-link"
                  data-bs-toggle="tab"
                  href="javascript:;"
                  role="tab"
                  aria-selected="false"
                >
                  <svg
                    class="text-dark"
                    width="16px"
                    height="16px"
                    viewBox="0 0 40 44"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>document</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-1870.000000, -591.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(154.000000, 300.000000)">
                            <path
                              class="color-background"
                              d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                              opacity="0.603585379"
                            ></path>
                            <path
                              class="color-background"
                              d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">Messages</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-0 py-1 mb-0 nav-link"
                  data-bs-toggle="tab"
                  href="javascript:;"
                  role="tab"
                  aria-selected="false"
                >
                  <svg
                    class="text-dark"
                    width="16px"
                    height="16px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>settings</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-2020.000000, -442.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(304.000000, 151.000000)">
                            <polygon
                              class="color-background"
                              opacity="0.596981957"
                              points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                            ></polygon>
                            <path
                              class="color-background"
                              d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                              opacity="0.596981957"
                            ></path>
                            <path
                              class="color-background"
                              d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>-->
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="col-12 col-md-6 col-xl-6">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Contract Info</h6>
          </div>
          <div class="p-3 card-body">
            <h6
              class="text-xs text-uppercase text-body font-weight-bolder"
            >
              Id
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_info.code_id?contract_info.code_id:"-"}}
              </li>
            </ul>  
            <h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
              Creator
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_info.creator}}
                <!--<vsud-switch
                  id="flexSwitchCheckDefault"
                  name="email"
                  class="ps-0 ms-auto"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  checked
                  >Email me when someone follows me</vsud-switch
                >-->
              </li>
              <!--<li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault1"
                  name="Email"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  class="ps-0 ms-auto"
                  >Email me when someone answers on my post</vsud-switch
                >
              </li>

              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault2"
                  name="Email"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  class="ps-0 ms-auto"
                  checked
                  >Email me when someone mentions me</vsud-switch
                >
              </li>-->
            </ul>
            <h6
              class="my-1 text-xs text-uppercase text-body font-weight-bolder"
            >
              Admin
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                <!--<vsud-switch
                  id="flexSwitchCheckDefault3"
                  name="Project Launch"
                  class="ps-0 ms-auto"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  >New launches and projects</vsud-switch
                >-->
                {{contract_info.admin}}
              </li>
              <!--<li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault4"
                  name="Product Update"
                  class="ps-0 ms-auto"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  checked
                  >Monthly product updates</vsud-switch
                >
              </li>
              <li class="px-0 pb-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault5"
                  name="Newsletter"
                  class="ps-0 ms-auto"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  >Subscribe to newsletter</vsud-switch
                >
              </li>-->
            </ul>
            <h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
              Label
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_info.label}}
              </li>
            </ul>
            <h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
              Created
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_info.created?contract_info.created:"-"}}
              </li>
            </ul>
            <h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
              IBC Port Id
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_info.ibc_port_id?contract_info.ibc_port_id:"-"}}
              </li>
            </ul>
            <h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
              extension
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_info.extension?contract_info.extension:"-"}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 col-12 col-md-6 col-xl-6 mt-md-0">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Contract Metadata</h6>
          </div>
          <div class="p-3 card-body">
            <h6
              class="text-xs text-uppercase text-body font-weight-bolder"
            >
              Developer Address
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_metadata.developer_address}}
              </li>
            </ul>  
            <h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
              Reward Address
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_metadata.reward_address}}
              </li>
            </ul>
            <!--<h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
                Active balances From Reward Address
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                <span>
                    {{contract_balances.amount}}
                </span>
                <span class="px-1">
                    {{contract_balances.denom}}
                </span>
              </li>
            </ul>-->
            <h6
              class="my-1 text-xs text-uppercase text-body font-weight-bolder"
            >
              Gas Rebate To User
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_metadata.gas_rebate_to_user}}
              </li>
            </ul>
            <h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
              Collect Premium
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_metadata.collect_premium}}
              </li>
            </ul>
            <h6 class="my-1 text-xs text-uppercase text-body font-weight-bolder">
              Premium Percentage Charged
            </h6>
            <ul class="list-group">
              <li class="px-0 py-1 border-0 list-group-item">
                {{contract_metadata.premium_percentage_charged}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row" id="filter_rewards">
      <div class="col-12">
        <div class="mb-4 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Historial Rewards</h6>
            <p class="text-xs">Can filter rewards over different time periods (daily, monthly, custom)</p>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
                <!--<div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                        <thead>
                        <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Contract
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Rewards
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            inflation
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            height
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Gas consumed
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Date
                        </th>
                        <th class="text-secondary opacity-7"></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in block" :key="index">
                                <td>
                                    <div class="d-flex px-2 py-1">
                                    <div class="d-flex flex-column justify-content-center">
                                        <div class="mb-0 text-sm">{{item.join_block_reawards[0].contract}}</div>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.join_block_reawards[0].rewards/1000000}}</p>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.join_block_reawards[0].inflation/1000000}}</p>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.join_block_reawards[0].height}}</p>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.join_block_reawards[0].gas_consumed}}</p>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.timestamp}}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>-->
                <div class="table-responsive px-3">
                  <data-table :rows="block_filter" :loading="isLoading" top-pagination :pagination="pagination" striped sn @loadData="load_data"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import VsudSwitch from "@/components/VsudSwitch.vue";
//import ProfileInfoCard from "./components/ProfileInfoCard.vue";
//import VsudAvatar from "@/components/VsudAvatar.vue";
import moment from "moment"
import { TOTAL_REWARDS_FILTER, REWARDS_DATE_FILTER } from "../graphql-operations/total_rewards"
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
//import { DataTable, TableBody, TableHead} from "../../../lib/DataTable"
import { DataTable } from "@jobinsjp/vue3-datatable"

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
//import DefaultProjectCard from "./components/DefaultProjectCard.vue";
//import PlaceHolderCard from "@/examples/Cards/PlaceHolderCard.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
export default {
  name: "ProfileOverview",
  components: {
    DataTable
    //TableBody, TableHead, DataTable
    //VsudSwitch,
    //ProfileInfoCard,
    //VsudAvatar,
    //DefaultProjectCard,
    //PlaceHolderCard,
  },
  data() {
    return {
      contract_id:"",
      contract_info:{
        code_id: "",
        creator: "",
        admin: "",
        label: "",
        created: "",
        ibc_port_id: "",
        extension: "",
      },  
      contract_balances:{
        denom: "",
        amount: ""
      },
      contract_metadata:{},
      total_rewads:[],
      start_date:(new Date("2022-04-25T00:00").getTime()/1000),
      finish_date:(new Date("2022-04-27T00:00").getTime()/1000),
      block:{},
      block_aggregate:1000,
      block_filter:[],
      pagination:{},
      limit_vl:10,
      offset_vl:0,
      query_page:0,
      isLoading:true,
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
      faFacebook,
      faTwitter,
      faInstagram,
    };
  },

  mounted() {
    var url_contract_info = "https://api.torii-1.archway.tech/cosmwasm/wasm/v1/contract/"
    var url_metadata = "https://api.torii-1.archway.tech/archway/gastracker/v1/contract/metadata/"
    var url_balances = "https://api.torii-1.archway.tech/cosmos/bank/v1beta1/balances/"

    this.contract_id = this.$route.params.id ? this.$route.params.id:""
    console.log(this.contract_id)
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url_contract_info+this.contract_id, requestOptions)
    .then(response => response.json())
    .then((result) => {
        this.contract_info = result.contract_info
    })
    .catch(error => console.log('error', error));

    fetch(url_metadata+this.contract_id, requestOptions)
    .then(response => response.json())
    .then((result) => {
        this.contract_metadata = result.metadata
    })
    .then(()=>{
        fetch(url_balances+this.contract_metadata.reward_address+"/by_denom?denom=utorii", requestOptions)
        .then(response => response.json())
        .then((result) => {
            this.contract_balances = result.balance
        })
        .catch(error => console.log('error', error));
    })
    .catch(error => console.log('error', error))
    //console.log(moment("2022-04-17 02:11:10.823527").format("YYYY-MM-DD HH:mm:ss.SSS"))
    //console.log(moment("2022-04-17 02:11:10.823527").utcOffset(0, true).format())
    //console.log((new Date("2022-04-17T02:11:10.823527")).toISOString())
  },
  apollo: {
    // Apollo specific options
    total_rewads: {
        query:TOTAL_REWARDS_FILTER,
        //loadingKey: 'loading',
        variables(){ 
            return{
                contract_id: this.contract_id
            }
        } 
    },
    block:{
        query: REWARDS_DATE_FILTER,
        variables(){
            return{
                contract_id:this.contract_id,
                start_date: new moment().subtract(40, "days").format("YYYY-MM-DD HH:mm:ss.SSS"),
                finish_date: new moment(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
                limit_vl:this.limit_vl,
                offset_vl:this.offset_vl
            }
        },
        result(result) {
          this.block_aggregate = result.data.block_aggregate.aggregate.count
          this.isLoading = false
        }
    },
  },
  watch: {
    block: {
      handler(now_block) {
        var block_list = []
        now_block.forEach(element => {
          var table_block={
            //CONTRACT:element.join_block_reawards[0].contract,
            REWARDS:element.join_block_reawards[0].rewards/1000000+" TORII",
            INFLATION:element.join_block_reawards[0].inflation/1000000+" TORII",
            HEIGHT:element.join_block_reawards[0].height,
            'GAS CONSUMED':element.join_block_reawards[0].gas_consumed,
            DATE:element.timestamp
          }
          block_list.push(table_block)
        });
        this.block_filter=block_list
        this.isLoading = false
        this.pagination = { per_page:this.limit_vl, page: this.query_page, total: this.block_aggregate }
        //console.log(this.block_filter)
        //console.log("pagination.value")
        //console.log(this.pagination)
        //console.log(pagination.value)
      },
      //deep: true,
      //immediate: true
    },
    /*block_aggregate:{
      handler(now_block_aggregate) {
        console.log(now_block_aggregate)
      }
    }*/
  },
  methods:{
    load_data(query){
      //console.log(this.pagination)
      //query.per_page
      this.query_page = query.page
      this.isLoading = true
      this.limit_vl = parseInt(query.per_page)
      this.offset_vl = (this.limit_vl*parseInt(query.page))-this.limit_vl 
      this.pagination = { per_page:parseInt(query.per_page), page:parseInt(query.page), total: this.block_aggregate }
      this.$apollo.queries.block.refetch()
    }
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
};
</script>
<style lang="css">

.bg-gradient-profile{
  background-image: linear-gradient(310deg, #ffffff 0%, #ff7777 100%);
}
.i_history_rewards:hover{
  color: rgb(237 165 69) !important;
}
</style>
