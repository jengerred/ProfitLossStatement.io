$(function () {
    $("#FormData").on('change, blur', '.qty', function () {
        findTotal();
    })
});
function findTotal() {
    var maxD = 0;
    var array = [];
    var total = 0;
    $("#FormData .qty").each(function (key, val) {
        var value = $(this).val();

        if (!isNaN(value) && value.length != 0) {
            total += parseFloat(value);
            array[key] = GetMax(parseFloat(value));
        }
    })

    maxD = Math.max.apply(Math, array);
    if (maxD == -Infinity) {
        maxD = 0;
    }

    if (maxD != -Infinity) {
        $("#total").val(total.toFixed(maxD));
    }
}
function GetMax(val) {
    var s = [];
    s = val.toString().split(".");
    if (s.length > 1)
        return s[1].length;
    else
        return 0;
}