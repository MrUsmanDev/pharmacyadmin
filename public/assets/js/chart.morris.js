
$(function(){
	
	/* Morris Area Chart */
	
	window.mA = Morris.Area({
	    element: 'morrisArea',
	    data: [],
	    xkey: 'y',
	    ykeys: ['a'],
	    labels: ['Revenue'],
	    lineColors: ['#1b5a90'],
	    lineWidth: 2,
		
     	fillOpacity: 0.5,
	    gridTextSize: 10,
	    hideHover: 'auto',
	    resize: true,
		redraw: true
	});
	
	/* Morris Line Chart */
	
	window.mL = Morris.Line({
	    element: 'morrisLine',
	    data: [],
	    xkey: 'y',
	    ykeys: ['a', 'b'],
	    labels: ['Doctors', 'Patients'],
	    lineColors: ['#1b5a90','#ff9d00'],
	    lineWidth: 1,
	    gridTextSize: 10,
	    hideHover: 'auto',
	    resize: true,
		redraw: true
	});
	const updateChart = async() =>{
		try{
            const url = `http://localhost:5534/api/Dashboard/SelectRevenueChartData`
            const res = await fetch(url)
            if(!res.ok){
                throw new Error(`Request failed with status ${res.status}`)
            }
            const responseData = await res.json()
			const backendData = responseData.Data
			const morrisData = backendData.map(item => ({
				y: String(item.y), // Convert the year to a string
				a: item.a // Keep 'a' as it is
			}));
			mA.setData(morrisData)
            return {status: true, data: responseData.Data || []}
    }catch(err){
        console.error(err)
        return {status: false, data: []}
    }
	}
	const updateStatusChart = async() =>{
		try{
            const url = `http://localhost:5534/api/Dashboard/SelectStatusChartData`
            const res = await fetch(url)
            if(!res.ok){
                throw new Error(`Request failed with status ${res.status}`)
            }
            const responseData = await res.json()
			const backendData = responseData.Data
			const morrisData = backendData.map(item => ({
				y: String(item.y), // Convert the year to a string
				a: item.a,
				b: item.b// Keep 'a' as it is
			}));
			mL.setData(morrisData)
            return {status: true, data: responseData.Data || []}
    }catch(err){
        console.error(err)
        return {status: false, data: []}
    }
	}
	updateChart()
	updateStatusChart()
	$(window).on("resize", function(){
		mA.redraw();
		mL.redraw();
	});

});