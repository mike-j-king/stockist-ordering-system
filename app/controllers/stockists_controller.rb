class StockistsController < ApplicationController
  before_action :set_stockist, only: [:show, :update, :destroy]

  # GET /stockists
  def index
    @stockists = Stockist.all

    render json: @stockists
  end

  # GET /stockists/1
  def show
    render json: @stockist
  end

  # POST /stockists
  def create
    @stockist = Stockist.new(stockist_params)

    if @stockist.save
      render json: @stockist, status: :created, location: @stockist
    else
      render json: @stockist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stockists/1
  def update
    if @stockist.update(stockist_params)
      render json: @stockist
    else
      render json: @stockist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stockists/1
  def destroy
    @stockist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stockist
      @stockist = Stockist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def stockist_params
      params.require(:stockist).permit(:name, :notes)
    end
end
