$.extend({
    show: function() {
        this.each(function() {
            this.style.display = "block";
        })
        return this;
    },
    hide: function() {
        this.each(function() {
            this.style.display = "none";
        })
        return this;
    }
})
