using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data_Layer.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(name: "FirstName", table: "users", maxLength: 50);
            migrationBuilder.AlterColumn<string>(name: "LastName", table: "users", maxLength: 50);
            migrationBuilder.AlterColumn<string>(name: "UserName", table: "users", maxLength: 64);
            migrationBuilder.AlterColumn<string>(name: "Password", table: "users", maxLength: 64);
            migrationBuilder.AlterColumn<string>(name: "Role", table: "users", maxLength: 10);
            migrationBuilder.AlterColumn<string>(name: "Email", table: "users", maxLength: 64);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
