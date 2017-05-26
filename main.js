var notebooks = angular.module('notebooks', []);

notebooks.controller('NotebookListCtrl', function($scope) {
  $scope.notebooks = [
    {"name": "Alicea Joshua",
     "website": "blank.com",
     "age": "P.1"},

    {"name": " Alie, Raees",
     "website": "blank.com",
     "age": "P.1"},

    {"name": "Bashir, Sean",
     "website": "blank.com",
     "age": "P.1"},

    {"name": "Chairez, Evan ",
     "website": "blank.com",
     "age": "P.1"},

    {"name": "Chen, Delvin",
     "website": "blank.com",
     "age": "P.1"},

    {"name": "Chen, Sally",
     "website": "blank.com",
     "age": "P.1"},

    {"name": "Cheng, David",
     "website": "blank.com",
     "age": "P.1"},

    {"name": "Dai, Eileen",
     "website": "blank.com",
     "age": "P.1"},

    {"name": "Doscher, Daniel",
     "website": "blank.com",
      "age": "P.1"},

      {"name": "Dai, Eileen",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Doscher, Daniel",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Dozier, Tylik",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Duran, Ashley",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Gomez, Rayni",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Gonzalez, Adrianna",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Joussef, Andrew",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Kamberi, England ",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Kaur, Jasmeen",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Lam, Gary",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Lin, Christopher",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Machuca, Mabel ",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Nicovic, Christopher",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Pacheco, Elijah",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Patel, Arik",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Riaz, Danyal",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Sehar, Ashna",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Singh, Nirmala",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Sun, Chengyang",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Tian, Edison",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Villalba, Diego",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "You, Vicky",
     "website": "blank.com",
     "age": "P.1"},

     {"name": "Alejo, Laura",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Araujo, Vivian",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Azekwu, Abbel ",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Baigorria, Marc ",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Cepeda, Antonio",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Chen, Meixia",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Daoud, Samira",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Dong, En Lin",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Fenton, Alex",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Garcia, Alison",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Gjergji, Klaudja",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Guzman, Angel",
     "website": "blank.com",
     "age": "P.2"},

          {"name": "Haider, Munir",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Maalik, Abdul ",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Mahgoub, Mariam",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Mancia, Katherine",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Manjunatha, Vishnu",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Mashriqi, Warith",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Moskowitz, Lyla",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Nunez, Kenny",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Nunez Espinal, Omar ",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Pena, Gabriel",
     "website": "blank.com",
     "age": "P.2"},

          {"name": "Rivera, William",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Sadaat, Atiqullah",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Sanchez, Fernando",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Santiago, Greshen",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Simpson, Chanel",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Simpson, Cherise",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Villalobos, Yasmin",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Wang, Amanda",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Zheng, Dennis",
     "website": "blank.com",
     "age": "P.2"},

     {"name": "Acevedo, Vincent",
     "website": "blank.com",
     "age": "P.6"},
          {"name": "Afzal, Saad ",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Aronov, Bat-El",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Batista, Erik",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Beaubrun, Renato",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Carvajal, Juan",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Cha, Sae Mi",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Choi, Jin M",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Dhanpaul, Kennard",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Diaz, Tommy",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "E, Shuai Qi",
     "website": "blank.com",
     "age": "P.6"},

          {"name": "Elsawi, Narvik",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Gao, Tianyi",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Holder, Angel",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Katanov, Israel",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Lin, Alan",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Lin, Yujun",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Lochan, Daniel",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Mejia, Ernesto",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Menbreno Lobo, Alejandro",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Mejia, Ernesto",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Mohmend, Kalimullah",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Montague, Tiyonne",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Rahman, Mohammed",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Rexha, Arlind ",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Reza, Rakib ",
     "website": "blank.com",
     "age": "P.6"},

     {"name": " Rodriguez, Jorge",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Simmons, Ronald",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Snoddy, Kianna",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Swift, Hy Jzuan",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Tehrani, Patrick",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Weng, Kelly",
     "website": "blank.com",
     "age": "P.6"},

     {"name": "Ahsan, Ismail ",
     "website": "blank.com",
     "age": "P.8"},

     {"name": "Cantos, Melanie",
     "website": "blank.com",
     "age": "P.8"},

     {"name": "Esquivel, Abigail",
     "website": "blank.com",
     "age": "P.8"},

     {"name": "Fayzulayev, Isabel ",
     "website": "blank.com",
     "age": "P.8"},

     {"name": "Gonzalez, Emanuel",
     "website": "blank.com",
     "age": "P.8"},

     {"name": "Dai, Eileen",
     "website": "blank.com",
     "age": "P.6"
}
  ];
  $scope.orderList = "name";
});