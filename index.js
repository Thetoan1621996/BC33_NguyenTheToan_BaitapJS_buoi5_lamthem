//Bài tập 1
/*Sơ đồ bà khối:
Input:
Nhập vào tên, tổng thu nhập năm, số người phụ thuộc.
Output:
Tính ra thuế thu nhập cá nhân
Progress:
Có công thức tính thu nhập chịu thuế = tổng thu nhập năm - 4tr - số người phụ thuộc * 1.6
Công thức tính thuế thu nhập = thu nhập chịu thuế * thuế suất */

function personalIncomeTax() {
    var name = "Toàn";
    var totalSalary = 60;
    var familyPerson = 4;
    var incomeTaxes = totalSalary - 4 - familyPerson * 1.6;
    var personalIncomeTax;
    if (incomeTaxes > 0 && incomeTaxes <= 60) {
      personalIncomeTax = (incomeTaxes * 5) / 100;
    } else if (incomeTaxes > 60 && incomeTaxes <= 120) {
      personalIncomeTax = (incomeTaxes * 10) / 100;
    } else if (incomeTaxes > 120 && incomeTaxes <= 210) {
      personalIncomeTax = (incomeTaxes * 15) / 100;
    } else if (incomeTaxes > 210 && incomeTaxes <= 384) {
      personalIncomeTax = (incomeTaxes * 20) / 100;
    } else if (incomeTaxes > 384 && incomeTaxes <= 624) {
      personalIncomeTax = (incomeTaxes * 25) / 100;
    } else if (incomeTaxes > 624 && incomeTaxes <= 960) {
      personalIncomeTax = (incomeTaxes * 30) / 100;
    } else {
      personalIncomeTax = (incomeTaxes * 35) / 100;
    }
    console.log(
      "Thuế thu nhập cá nhân mà",
      name,
      "phải trả là:",
      personalIncomeTax
    );
  }
  personalIncomeTax();
  
  //Bài tập 2
  /*Sơ đồ ba khối:
  Input:
  Nhập vào mã khách hàng, loại khách hàng, số kênh cao cấp
  Có hai loại khách hàng đó là nhà dân và doanh nghiệp
  Out put:
  Tính và xuất ra hóa đơn tiền cáp
  Progress:
  Tạo biến mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp, phí xử lí hóa đơn, phí dịch vụ cơ bản và phí thuê kênh cao cấp
  Nếu loại khách hàng là cá nhân thì:
  - Số kết nối = 0
  - Phí xử lí hóa đơn = 4.5
  - Phí dịch vụ cơ bản = 20.5
  - Phí thuê kênh cao cấp = 7.5/kênh
  nếu khách hàng là doanh nghiệp:
  - Phí xử lí hóa đơn = 15
  - Phí xử lí dịch vụ cơ bản = 75 cho 10 kênh đầu, mỗi kết nối tiếp theo là 5/kết nối
  - Phí thuế kênh cao cấp = 50/kênh
  * Tiền cáp = phí xử lí hóa đơn + phí dịch vụ cơ bản + phí thuê kênh cao cấp */
  function cableBill(){
  var cusNum = 12243214;
  var cusType = "Doanh nghiệp";
  var billFee;
  var standarFee;
  var premiumChannel = 7;
  var premiumFeePerChannel;
  var connect = 15;
  var totalBill;
  if(cusType === "Cá nhân"){
    connect = 0;
    billFee = 4.5;
    standarFee = 20.5;
    premiumFeePerChannel = 7.5;
  }else if(cusType === "Doanh nghiệp"){
    billFee = 15;
    premiumFeePerChannel = 50;
    if(connect > 0 && connect <= 10){
      standarFee = 75;
    }else{
      standarFee = 75 + ((connect - 10) * 5);
    }
  }
  totalBill = billFee + standarFee + premiumFeePerChannel * premiumChannel;
  console.log("Tiền cáp tháng này của khách hàng",cusNum,"là", totalBill); 
  }
  cableBill();